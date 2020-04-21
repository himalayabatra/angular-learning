import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerValueComponent } from './timer-value.component';

describe('TimerValueComponent', () => {
  let component: TimerValueComponent;
  let fixture: ComponentFixture<TimerValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
