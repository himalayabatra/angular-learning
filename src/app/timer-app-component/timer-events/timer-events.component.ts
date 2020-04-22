import { Component, OnInit } from '@angular/core';
import {TimerActionsService} from '../services/timer-actions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer-events',
  templateUrl: './timer-events.component.html',
  styleUrls: ['./timer-events.component.css']
})
export class TimerEventsComponent implements OnInit {
  statusSubscription: Subscription;
  eventsArray:string[] = [];
  constructor(private timerActionsService: TimerActionsService) {

    this.statusSubscription = this.timerActionsService.getTimerStatus().subscribe(val => {
      const date = new Date();
      if(val.value === 'pause'){
        this.eventsArray.push("Paused At "+ `${date.getMonth()+ '/' +date.getDate()+ '/' +date.getFullYear()+ ' ' +this.timeFormat(date)}`);
      } else if(val.value === 'start') {
        this.eventsArray.push("Started At "+ `${date.getMonth()+ '/' +date.getDate()+ '/' +date.getFullYear()+ ' ' +this.timeFormat(date)}`);
      } else if(val.value === 'reset') {
        this.eventsArray = [];
      }
    })
  }

  timeFormat(date) {
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let dayTime = hrs >= 12 ? 'pm' : 'am';
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12;
    min = min < 10 ? '0'+min : min;
    let formattedTime = hrs + ':' + min + ':' + sec + ' ' + dayTime;
    return formattedTime;
  }

  ngOnInit(): void {
  }

}
