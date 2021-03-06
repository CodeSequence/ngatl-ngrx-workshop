import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { WidgetsActionTypes } from './widgets.actions';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Widget } from '../../core/widgets/widget.model';
import { WidgetsService } from '../../core/widgets/widgets.service';

import * as WidgetActions from './widgets.actions';

@Injectable({ providedIn: 'root'})
export class WidgetsEffects {
  @Effect()
  loadWidgets$ = this.actions$.pipe(
    ofType(WidgetsActionTypes.LoadWidgets), 
    mergeMap(() => 
      this.widgetsService.all().pipe(
        map((res: Widget[]) => new WidgetActions.WidgetsLoaded(res)),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  addWidget$ = this.actions$.pipe(
    ofType(WidgetsActionTypes.AddWidget), 
    mergeMap((action: WidgetActions.AddWidget) => 
      this.widgetsService.create(action.payload).pipe(
        map((res: Widget) => new WidgetActions.WidgetAdded(res)),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  updateWidget$ = this.actions$.pipe(
    ofType(WidgetsActionTypes.UpdateWidget), 
    mergeMap((action: WidgetActions.UpdateWidget) => 
      this.widgetsService.update(action.payload).pipe(
        map((res: Widget) => new WidgetActions.WidgetUpdated(res)),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  deleteWidget$ = this.actions$.pipe(
    ofType(WidgetsActionTypes.DeleteWidget), 
    mergeMap((action: WidgetActions.DeleteWidget) => 
      this.widgetsService.delete(action.payload).pipe(
        map((res: Widget) => new WidgetActions.WidgetDeleted(res)),
        catchError(() => EMPTY)
      )
    )
  );  

  constructor(
    private actions$: Actions,
    private widgetsService: WidgetsService
  ) {}
}  