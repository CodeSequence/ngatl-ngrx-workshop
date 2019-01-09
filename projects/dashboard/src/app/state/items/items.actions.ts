import { Action } from '@ngrx/store';
import { Item } from '../../core/items/item.model';

export enum ItemsActionTypes {
  ItemsAction = '[Items] Action',
  ItemSelected = '[Items Page] Item Selected',
  LoadItems = '[Items Page] Load Items Request',
  ItemsLoadedSuccess = '[Items/API] Items Loaded Success',
  AddItem = '[Items Page] Add Item Request',
  ItemAddedSuccess = '[Items/API] Item Added Success',
  UpdateItem = '[Items] Update Item Request',
  ItemUpdatedSuccess = '[Items/API] Item Updated Success',
  DeleteItem = '[Items Page] Delete Item Request',
  ItemDeletedSuccess = '[Items] Item Deleted Success',
}

export class Items implements Action {
  readonly type = ItemsActionTypes.ItemsAction;
}

export class ItemSelected implements Action {
  readonly type = ItemsActionTypes.ItemSelected;

  constructor(public payload: string) { }
}

export class LoadItems implements Action {
  readonly type = ItemsActionTypes.LoadItems;
}

export class ItemsLoadedSuccess implements Action {
  readonly type = ItemsActionTypes.ItemsLoadedSuccess;
  
  constructor(public payload: Item[]) { }
}

export class AddItem implements Action {
  readonly type = ItemsActionTypes.AddItem;

  constructor(public payload: Item) { }
}

export class AddItemSuccess implements Action {
  readonly type = ItemsActionTypes.ItemAddedSuccess;
  
  constructor(public payload: Item) { }
}

export class UpdateItem implements Action {
  readonly type = ItemsActionTypes.UpdateItem;

  constructor(public payload: Item) { }
}

export class UpdateItemSuccess implements Action {
  readonly type = ItemsActionTypes.ItemUpdatedSuccess;
  
  constructor(public payload: Item) { }
}

export class DeleteItem implements Action {
  readonly type = ItemsActionTypes.DeleteItem;

  constructor(public payload: Item) { }
}

export class DeleteItemSuccess implements Action {
  readonly type = ItemsActionTypes.ItemDeletedSuccess;
  
  constructor(public payload: Item) { }
}

export type ItemsActions = Items
  | ItemSelected
  | LoadItems
  | ItemsLoadedSuccess
  | AddItem
  | AddItemSuccess
  | UpdateItem
  | UpdateItemSuccess
  | DeleteItem
  | DeleteItemSuccess
;
