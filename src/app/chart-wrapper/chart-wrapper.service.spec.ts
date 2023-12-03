import { TestBed } from '@angular/core/testing';

import { ChartWrapperService } from './chart-wrapper.service';
import availableCharts from '../../data/available-charts';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ChartWrapperService', () => {
  let service: ChartWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      providers: [ChartWrapperService],
    });
    service = TestBed.inject(ChartWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('<generateChartForm>', () => {
    // Pre-last will remain truthy, as during creation 4 will be true, 1 false. we cannot deselect all
    it('will have 1 result of truthy (pre-last)', () => {
      const form = service.generateChartForm(availableCharts);
      availableCharts.forEach(chart => form.get([chart.id]).patchValue({ selected: false }));
      expect(form.get([availableCharts[availableCharts.length - 1].id, 'selected']).value).toBeFalsy();
      expect(form.get([availableCharts[availableCharts.length - 2].id, 'selected']).value).toBeTruthy();
    });

    // last will remain falsy, as we already selected 4 first during test run
    it('will keep 4 selections only', () => {
      const form = service.generateChartForm(availableCharts);
      availableCharts.forEach(chart => form.get([chart.id]).patchValue({ selected: false }));
      expect(form.get([availableCharts[availableCharts.length - 1].id, 'selected']).value).toBeFalsy();
    });
  });
});
