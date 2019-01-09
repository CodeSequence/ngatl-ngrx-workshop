import { Component, OnInit } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllItems, selectCurrentItem } from '../state';
import { ItemsActionTypes } from '../state/items/items.actions';
import * as ItemsActions from '../state/items/items.actions';
import { ItemsState } from '../state/items/items.reducer';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items$ = this.store.pipe(select(selectAllItems));
  currentItem$ = this.store.pipe(select(selectCurrentItem));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === ItemsActionTypes.AddItem
        || action.type === ItemsActionTypes.UpdateItem
        || action.type === ItemsActionTypes.DeleteItem
      )
    );

  constructor(private store: Store<ItemsState>, private actions$: ActionsSubject) {}

  ngOnInit() {
    this.store.dispatch(new ItemsActions.LoadItems());

    this.mutations$.subscribe(_ => this.resetCurrentItem());
    this.resetCurrentItem();
  }

  resetCurrentItem() {
    this.selectItem({id: null});
  }

  selectItem(item) {
    this.store.dispatch(new ItemsActions.ItemSelected(item.id));
  }

  saveItem(item) {
    if (!item.id) {
      this.store.dispatch(new ItemsActions.AddItem(item));
    } else {
      this.store.dispatch(new ItemsActions.UpdateItem(item));
    }
  }

  deleteItem(item) {
    this.store.dispatch(new ItemsActions.DeleteItem(item));
  }
}
