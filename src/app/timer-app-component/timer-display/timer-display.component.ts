import { Component, OnInit, Input } from '@angular/core';
import {TimerActionsService} from '../services/timer-actions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.css']
})
export class TimerDisplayComponent implements OnInit {
  timerValue;
  timerInterval;
  subscription: Subscription;
  statusSubscription: Subscription;
  constructor(private timerActionsService: TimerActionsService) {
    this.subscription = this.timerActionsService.getTimerValue().subscribe(val => {
      this.timerValue = val.value;
    });
    this.statusSubscription = this.timerActionsService.getTimerStatus().subscribe(val => {
      if(val.value === 'pause' || val.value === 'reset'){
        clearInterval(this.timerInterval);
      } else if(val.value === 'start') {
        this.startTimerEvent();
      }
    })
  }

  ngOnInit(): void {
  }

  startTimerEvent(){
    if(this.timerValue > 0) {
    this.timerInterval = setInterval(()=>{
      --this.timerValue;
    },1000);
  } else {
    clearInterval(this.timerInterval);
  }
  }

}
