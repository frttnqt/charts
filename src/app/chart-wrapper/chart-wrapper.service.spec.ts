import { TestBed } from '@angular/core/testing';

import { ChartWrapperService } from './chart-wrapper.service';

describe('ChartWrapperService', () => {
  let service: ChartWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartWrapperService],
    });
    service = TestBed.inject(ChartWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
