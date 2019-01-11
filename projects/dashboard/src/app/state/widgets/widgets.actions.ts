import { Widget } from '../../core/widgets/widget.model';
import { Action } from '@ngrx/store';

export enum WidgetsActionTypes {
  WidgetSelected = '[Widgets Page] Widget Selected',
  LoadWidgets = '[Widgets Page] Load Widgets',
  AddWidget = '[Widgets Page] Add Widget',
  UpdateWidget = '[Widgets Page] Update Widget',
  DeleteWidget = '[Widgets Page] Delete Widget'
}

export class SelectWidget implements Action {
  readonly type = WidgetsActionTypes.WidgetSelected;

  constructor(public payload) {}
}

export class LoadWidgets implements Action {
  readonly type = WidgetsActionTypes.LoadWidgets;

  constructor(public payload) {}
}

export class AddWidget implements Action {
  readonly type = WidgetsActionTypes.AddWidget;

  constructor(public payload: Widget) {}
}
  
export class UpdateWidget implements Action {
  readonly type = WidgetsActionTypes.UpdateWidget;

  constructor(public payload: Widget) {}
}

export class DeleteWidget implements Action {
  readonly type = WidgetsActionTypes.DeleteWidget;

  constructor(public payload: Widget) {}
}

export type WidgetsActions = SelectWidget
  | LoadWidgets
  | AddWidget
  | UpdateWidget
  | DeleteWidget
;