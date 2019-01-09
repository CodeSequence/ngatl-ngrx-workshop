import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TotalsViewModule } from './totals';


import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemsTotalComponent } from './items/items-total/items-total.component';
import { ItemsComponent } from './items/items.component';
import { WidgetDetailComponent } from './widgets/widget-detail/widget-detail.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetsTotalComponent } from './widgets/widgets-total/widgets-total.component';
import { WidgetsComponent } from './widgets/widgets.component';

import { reducers } from './state';
import { ItemsEffects } from './state/items/items.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent,
    ItemsTotalComponent,
    WidgetsComponent,
    WidgetDetailComponent,
    WidgetsListComponent,
    WidgetsTotalComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 5 }),
    EffectsModule.forRoot([ItemsEffects]),
    TotalsViewModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
