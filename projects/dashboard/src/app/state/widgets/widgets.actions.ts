import { Widget } from '../../core/widgets/widget.model';
import { Action } from '@ngrx/store';

export enum WidgetsActionTypes {
  WidgetSelected = '[Widgets Page] Widget Selected',
  LoadWidgets = '[Widgets Page] Load Widgets',
  WidgetsLoaded = '[Widgets/API] Widgets Loaded',
  AddWidget = '[Widgets Page] Add Widget',
  WidgetAdded = '[Widgets/API] Widget Added',
  UpdateWidget = '[Widgets Page] Update Widget',
  WidgetUpdated = '[Widgets/API] Widget Updated',
  DeleteWidget = '[Widgets] Delete Widget',
  WidgetDeleted = '[Widgets/API] Widget Deleted'
}

export class SelectWidget implements Action {
  readonly type = WidgetsActionTypes.WidgetSelected;

  constructor(public payload) {}
}

export class LoadWidgets implements Action {
  readonly type = WidgetsActionTypes.LoadWidgets;
}

export class WidgetsLoaded implements Action {
  readonly type = WidgetsActionTypes.WidgetsLoaded;

  constructor(public payload: Widget[]) {}
}

export class AddWidget implements Action {
  readonly type = WidgetsActionTypes.AddWidget;

  constructor(public payload: Widget) {}
}

export class WidgetAdded implements Action {
  readonly type = WidgetsActionTypes.WidgetAdded;

  constructor(public payload: Widget) {}
}
  
export class UpdateWidget implements Action {
  readonly type = WidgetsActionTypes.UpdateWidget;

  constructor(public payload: Widget) {}
}

export class WidgetUpdated implements Action {
  readonly type = WidgetsActionTypes.WidgetUpdated;

  constructor(public payload: Widget) { }
}

export class DeleteWidget implements Action {
  readonly type = WidgetsActionTypes.DeleteWidget;

  constructor(public payload: Widget) { }
}

export class WidgetDeleted implements Action {
  readonly type = WidgetsActionTypes.WidgetDeleted;

  constructor(public payload: Widget) { }
}

export type WidgetsActions = SelectWidget
  | LoadWidgets
  | WidgetsLoaded
  | AddWidget
  | WidgetAdded
  | UpdateWidget
  | WidgetUpdated
  | DeleteWidget
  | WidgetDeleted
;