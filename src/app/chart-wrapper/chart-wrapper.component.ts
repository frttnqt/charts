import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {FormsModule} from '@angular/forms';
import {NzColorPickerModule} from 'ng-zorro-antd/color-picker';

import chartData from '../../data/available-charts';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {ChartViewComponent} from '@app/common/chart-view/chart-view.component';
import {ChartConfigData, ChartData} from '@app/models/chart-data';
import {ChartDashboardComponent} from '@app/common/chart-dashboard/chart-dashboard.component';
import {isAfter, isBefore} from 'date-fns';

@Component({
	selector: 'app-chart-wrapper',
	standalone: true,
	imports: [
		NgForOf,
		NzCheckboxModule,
		NzDatePickerModule,
		FormsModule,
		NzColorPickerModule,
		NzRadioModule,
		ChartViewComponent,
		ChartDashboardComponent,
		NgIf,
	],
	templateUrl: './chart-wrapper.component.html',
	styleUrl: './chart-wrapper.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartWrapperComponent implements OnInit {


	private dateLimits = [new Date(2023, 11, 1), new Date(2023, 11, 10)];
	public selectedCharts: number[];

	constructor(private cdRef: ChangeDetectorRef) {
	}

	// Hey guys, regarding dateRange. I got no clue, what kind of data format expected for Fluidity/etc
	// So theoretically I can only imagine we expect some additional data like:
	// {23.06.22: 150kW} So for possible solution: get Dates selected , filter for dates and sum the data;
	// However I see no real example of input. Thanks in advance.
	public dateRange: Date[] = [new Date(2023, 11, 2), new Date(2023, 11, 7)];
	public charts: ChartData[] = [];
	public chartConfig: ChartConfigData;

	public ngOnInit(): void {
		this.charts = chartData;

		this.chartConfig = this.charts.reduce((acc, cur) => {
			acc[cur.id] = {
				selected: true,
				type: 'line',
			};
			return acc;
		}, {});
	}

	public disabledDate = (cur: Date): boolean => {
		return isBefore(cur, this.dateLimits[0]) || isAfter(cur, this.dateLimits[1]);
	};

	public trackCalendarChange(dateRange: Date[]): void {
		this.dateRange = dateRange;
		this.cdRef.detectChanges();
	}

	public selectChart(selectedIds: number[]): void {
		Object.keys(this.chartConfig)
			.forEach(chartId => {
					return this.chartConfig[chartId].selected = selectedIds.includes(Number(chartId));
				}
			);
		this.chartConfig = {...this.chartConfig};
		this.cdRef.detectChanges();
	}

	public updateChartType(type: 'line' | 'bar', chartId: number): void {
		this.chartConfig[chartId].type = type;
		this.chartConfig = {...this.chartConfig};
		this.cdRef.detectChanges();
	}
}
