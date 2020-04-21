import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerActionsService {
  private subject = new Subject<any>();
  private timerStatus = new Subject<any>();
  timerValue;
  constructor() { }

  setTimerValue(val) {
    this.timerValue = val;
    this.subject.next({ value: this.timerValue });
  }

  getTimerValue(){
    return this.subject.asObservable();
  }

  getTimerStatus(){
    return this.timerStatus.asObservable();
  }

  pauseTimerValue(){
    this.timerStatus.next({ value: 'pause' });
  }

  startTimerValue(){
    this.timerStatus.next({ value: 'start' });
  }

  resetTimerValue() {
    this.timerStatus.next({ value: 'reset' });
  }
}
