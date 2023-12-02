import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChartConfigData, ChartData, ChartMeter } from '@app/models/chart-data';
import { BarChartModule, LineChartModule, PieChartModule } from '@swimlane/ngx-charts';
import { NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { isDataWithinTimeInterval } from '@app/utils/time.helper';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chart-view',
  standalone: true,
  imports: [
    BarChartModule,
    NgSwitchCase,
    NgSwitch,
    LineChartModule,
    PieChartModule,
    NgSwitchDefault,
    NzSelectModule,
    NgForOf,
    FormsModule,
  ],
  templateUrl: './chart-view.component.html',
  styleUrl: './chart-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartViewComponent {
  @Input() public dateRange: Date[];
  @Input() public chart: ChartData;
  @Input() public chartConfig: ChartConfigData;

  public availableColorSchemes = ['vivid', 'natural', 'cool', 'fire'];

  public colorScheme = 'vivid';

  public get initialData(): ChartMeter[] {
    return this.chart.data.filter(sensor => isDataWithinTimeInterval(sensor, this.dateRange));
  }
  public get serializedChartData(): [{ name: string; series: { name: string; value: number }[] }] {
    return [
      {
        name: this.chart.name,
        series: this.chart.data
          .filter(sensor => isDataWithinTimeInterval(sensor, this.dateRange))
          .map(item => ({ value: item.value, name: item.date.toDateString() })),
      },
    ];
  }
}
