import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChartData } from '@app/models/chart-data';

@Component({
  selector: 'app-chart-view',
  standalone: true,
  imports: [],
  templateUrl: './chart-view.component.html',
  styleUrl: './chart-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartViewComponent {
  @Input() public dateRange: Date[];
  @Input() public chart: ChartData;
}
