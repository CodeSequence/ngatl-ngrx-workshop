import { Component, OnInit } from '@angular/core';
import { Widget } from '../core/widgets/widget.model';
import { select, Store } from '@ngrx/store';
import { WidgetsState } from '../state/widgets/widgets.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widgets$: Observable<Widget[]>;
  currentWidget: Widget;

  constructor(
    private store: Store<WidgetsState>
  ) {
    this.widgets$ = store.pipe(
      select('widgets'),
      map((state: WidgetsState) => state.widgets)
    );
  }

  ngOnInit() {
    this.resetCurrentWidget();
  }

  resetCurrentWidget() {
    this.currentWidget = { id: null, name: '', price: 0, description: '' };
  }

  selectWidget(widget) {
    this.currentWidget = widget;
  }

  reset(widget) {
    this.resetCurrentWidget();
  }

  getWidgets() {
    // Pending
  }

  saveWidget(widget) {
    if (!widget.id) {
      this.createWidget(widget);
    } else {
      this.updateWidget(widget);
    }
  }

  createWidget(widget) {
    this.store.dispatch({ type: 'create', payload: widget });
    this.resetCurrentWidget();
  }

  updateWidget(widget) {
    this.store.dispatch({ type: 'update', payload: widget });
    this.resetCurrentWidget();
  }

  deleteWidget(widget) {
    this.store.dispatch({ type: 'delete', payload: widget });
    this.resetCurrentWidget();
  }
}
