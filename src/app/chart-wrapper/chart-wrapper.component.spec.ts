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

  it('<setChartVisibility>', () => {
    component.setChartVisibility([]);
    Object.keys(component.chartConfig).map(key => expect(component.chartConfig[key].selected).toBeFalsy());
  });

  it('<updateChartType>', () => {
    component.updateChartType('bar', 1);
    expect(component.chartConfig[1].type).toEqual('bar');
  });
});
