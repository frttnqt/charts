import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ChartConfigData, ChartData} from '@app/models/chart-data';
import {NgForOf, NgIf} from '@angular/common';
import {ChartViewComponent} from '@app/common/chart-view/chart-view.component';

@Component({
	selector: 'app-chart-dashboard',
	standalone: true,
	imports: [
		NgForOf,
		ChartViewComponent,
		NgIf
	],
	templateUrl: './chart-dashboard.component.html',
	styleUrl: './chart-dashboard.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartDashboardComponent {

	@Input() public dateRange: Date[];
	@Input() public chartData: ChartData[];
	@Input() public chartConfig: ChartConfigData;
}
