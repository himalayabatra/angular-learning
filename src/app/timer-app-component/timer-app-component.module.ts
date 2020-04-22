import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { TimerValueComponent } from './timer-value/timer-value.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerEventsComponent } from './timer-events/timer-events.component';
import { TimerEventsCountsComponent } from './timer-events-counts/timer-events-counts.component';
import { TimerAppComponentComponent } from './timer-app-component.component';

@NgModule({
  declarations: [
    TimerValueComponent,
    TimerDisplayComponent,
    TimerEventsComponent,
    TimerEventsCountsComponent,
    TimerAppComponentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      { path: 'timer', component: TimerAppComponentComponent },
    ])
  ],
  exports:[
    TimerValueComponent,
    TimerDisplayComponent,
    TimerEventsComponent,
    TimerEventsCountsComponent,
    TimerAppComponentComponent,
  ],
  providers: [],
})
export class TimerModule { }
