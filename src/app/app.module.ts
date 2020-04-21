import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { TimerValueComponent } from './timer-value/timer-value.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerEventsComponent } from './timer-events/timer-events.component';
import { TimerEventsCountsComponent } from './timer-events-counts/timer-events-counts.component';
import { TimerAppComponentComponent } from './timer-app-component/timer-app-component.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerValueComponent,
    TimerDisplayComponent,
    TimerEventsComponent,
    TimerEventsCountsComponent,
    TimerAppComponentComponent,
    ProductListComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: TimerAppComponentComponent },
      { path: 'plp', component: ProductListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
