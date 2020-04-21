import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerAppComponentComponent } from './timer-app-component.component';

describe('TimerAppComponentComponent', () => {
  let component: TimerAppComponentComponent;
  let fixture: ComponentFixture<TimerAppComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerAppComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerAppComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
