import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {TimerActionsService} from '../timer-actions.service';

@Component({
  selector: 'app-timer-value',
  templateUrl: './timer-value.component.html',
  styleUrls: ['./timer-value.component.css']
})
export class TimerValueComponent implements OnInit {
  timerValue;
  startFlag = true;
  isClickingFirstTime = true;
  constructor(private timerActionsService: TimerActionsService) { }

  ngOnInit(): void {
  }

  startTimer(val){
    if(val <= 0) {
      return;
    }
    if(this.isClickingFirstTime) {
    this.timerActionsService.setTimerValue(val);
    this.isClickingFirstTime = !this.isClickingFirstTime;
    }
    if(this.startFlag) {
    this.timerActionsService.startTimerValue();
    } else {
      this.timerActionsService.pauseTimerValue();
    }
    this.startFlag = !this.startFlag;
    //this.startTimerEvent.emit(this.timerValue);
  }

  resetTimer() {
    this.timerValue = 0;
    this.timerActionsService.setTimerValue(0);
    this.isClickingFirstTime = true;
    this.startFlag = true;
    this.timerActionsService.resetTimerValue();
  }

}
