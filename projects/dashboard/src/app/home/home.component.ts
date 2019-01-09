import { Component, OnInit } from '@angular/core';
import { Item } from '../core/items/item.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRoot from '../state';
import * as  ItemsActions from '../state/items/items.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  items$: Observable<Item[]> = this.store.select(fromRoot.selectAllItems);

  constructor(
    private store: Store<fromRoot.AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new ItemsActions.LoadItems());
  }
}
