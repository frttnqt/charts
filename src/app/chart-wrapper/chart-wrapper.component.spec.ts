import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartWrapperComponent } from './chart-wrapper.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ChartWrapperComponent', () => {
  let component: ChartWrapperComponent;
  let fixture: ComponentFixture<ChartWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartWrapperComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.chartConfig).toBeDefined();
  });

  it('<disabledDate>', () => {
    expect(component.disabledDate(new Date())).toBeTruthy();
    expect(component.disabledDate(new Date(2023, 10, 3))).toBeFalse();
  });

  it('<trackCalendarChange>', () => {
    expect(component.dateRange).toEqual([new Date(2023, 10, 1), new Date(2023, 10, 4)]);
    const dates = [new Date(2023, 10, 2), new Date(2023, 10, 3)];
    component.trackCalendarChange(dates);
    expect(component.dateRange).toEqual(dates);
  });

  it('<setChartVisibility>', () => {
    component.setChartVisibility([]);
    Object.keys(component.chartConfig).map(key => expect(component.chartConfig[key].selected).toBeFalsy());
  });

  it('<updateChartType>', () => {
    component.updateChartType('bar', 1);
    expect(component.chartConfig[1].type).toEqual('bar');
  });
});
