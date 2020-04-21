import { TestBed } from '@angular/core/testing';

import { TimerActionsService } from './timer-actions.service';

describe('TimerActionsService', () => {
  let service: TimerActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
