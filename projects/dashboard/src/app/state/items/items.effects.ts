import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { Item } from '../../core/items/item.model';
import { ItemsService } from '../../core/items/items.service';
import {
  AddItem,
  DeleteItem,
  ItemAdded,
  ItemDeleted,
  ItemsActionTypes,
  ItemsLoaded,
  ItemUpdated,
  UpdateItem,
} from './items.actions';

@Injectable({providedIn: 'root'})
export class ItemsEffects {
  @Effect() effect$ = this.actions$.pipe(ofType(ItemsActionTypes.ItemsAction));

  @Effect()
  loadItems$ = this.actions$.pipe(
    ofType(ItemsActionTypes.LoadItems), 
    mergeMap(() => 
      this.itemsService.all().pipe(
        map((res: Item[]) => new ItemsLoaded(res)),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  addItem$ = this.actions$.pipe(
    ofType(ItemsActionTypes.AddItem), 
    mergeMap((action: AddItem) => 
      this.itemsService.create(action.payload).pipe(
        map((res: Item) => new ItemAdded(res)),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  updateItem$ = this.actions$.pipe(
    ofType(ItemsActionTypes.UpdateItem), 
    mergeMap((action: UpdateItem) => 
      this.itemsService.update(action.payload).pipe(
        map((res: Item) => new ItemUpdated(res)),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  deleteItem$ = this.actions$.pipe(
    ofType(ItemsActionTypes.DeleteItem), 
    mergeMap((action: DeleteItem) => 
      this.itemsService.delete(action.payload).pipe(
        map(_ => new ItemDeleted(action.payload)),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(
    private actions$: Actions,
    private itemsService: ItemsService
  ) {}
}
