import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerEventsCountsComponent } from './timer-events-counts.component';

describe('TimerEventsCountsComponent', () => {
  let component: TimerEventsCountsComponent;
  let fixture: ComponentFixture<TimerEventsCountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerEventsCountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerEventsCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
