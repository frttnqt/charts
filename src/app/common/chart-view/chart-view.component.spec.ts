import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartViewComponent } from './chart-view.component';

describe('ChartViewComponent', () => {
  let component: ChartViewComponent;
  let fixture: ComponentFixture<ChartViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartViewComponent);
    component = fixture.componentInstance;
    component.dateRange = [new Date(2023, 10, 1), new Date(2023, 10, 4)];
    component.chart = {
      id: 1,
      name: '1',
      type: 'line',
      data: [{ date: new Date(2022, 1, 1), id: 2, name: '2', value: 300, color: null }],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('<initialData>', () => {
    expect(component.initialData).toEqual([]);
  });

  it('<serializedChartData>', () => {
    component.dateRange = [new Date(2022, 1, 1), new Date(2099, 1, 1)];
    expect(component.serializedChartData).toEqual([
      { name: '1', series: [Object({ value: 300, name: 'Tue Feb 01 2022' })] },
    ]);
  });
});
