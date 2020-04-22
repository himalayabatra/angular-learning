import { Component, OnInit } from '@angular/core';
import {TimerActionsService} from '../services/timer-actions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer-events-counts',
  templateUrl: './timer-events-counts.component.html',
  styleUrls: ['./timer-events-counts.component.css']
})
export class TimerEventsCountsComponent implements OnInit {
  statusSubscription: Subscription;
  stopCount: number = 0;
  startCount: number = 0;
  constructor(private timerActionsService: TimerActionsService) {
    this.statusSubscription = this.timerActionsService.getTimerStatus().subscribe(val => {
      if(val.value === 'pause'){
        ++this.stopCount;
      } else if(val.value === 'start') {
        ++this.startCount;
      } else if(val.value === 'reset') {
        this.stopCount = 0;
        this.startCount = 0;
      }
    })
   }

  ngOnInit(): void {
  }

}
