import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerEventsComponent } from './timer-events.component';

describe('TimerEventsComponent', () => {
  let component: TimerEventsComponent;
  let fixture: ComponentFixture<TimerEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
