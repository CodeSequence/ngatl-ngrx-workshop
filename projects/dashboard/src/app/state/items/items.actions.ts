import { Action } from '@ngrx/store';
import { Item } from '../../core/items/item.model';

export enum ItemsActionTypes {
  ItemsAction = '[Items] Action',
  ItemSelected = '[Items Page] Item Selected',
  LoadItems = '[Items Page] Load Items',
  ItemsLoaded = '[Items/API] Items Loaded',
  AddItem = '[Items Page] Add Item',
  ItemAdded = '[Items/API] Item Added',
  UpdateItem = '[Items] Update Item',
  ItemUpdated = '[Items/API] Item Updated',
  DeleteItem = '[Items Page] Delete Item',
  ItemDeleted = '[Items] Item Deleted',
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

export class ItemsLoaded implements Action {
  readonly type = ItemsActionTypes.ItemsLoaded;
  
  constructor(public payload: Item[]) { }
}

export class AddItem implements Action {
  readonly type = ItemsActionTypes.AddItem;

  constructor(public payload: Item) { }
}

export class ItemAdded implements Action {
  readonly type = ItemsActionTypes.ItemAdded;
  
  constructor(public payload: Item) { }
}

export class UpdateItem implements Action {
  readonly type = ItemsActionTypes.UpdateItem;

  constructor(public payload: Item) { }
}

export class ItemUpdated implements Action {
  readonly type = ItemsActionTypes.ItemUpdated;
  
  constructor(public payload: Item) { }
}

export class DeleteItem implements Action {
  readonly type = ItemsActionTypes.DeleteItem;

  constructor(public payload: Item) { }
}

export class ItemDeleted implements Action {
  readonly type = ItemsActionTypes.ItemDeleted;
  
  constructor(public payload: Item) { }
}

export type ItemsActions = Items
  | ItemSelected
  | LoadItems
  | ItemsLoaded
  | AddItem
  | ItemAdded
  | UpdateItem
  | ItemUpdated
  | DeleteItem
  | ItemDeleted
;
