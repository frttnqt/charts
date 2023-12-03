import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';

import chartData from '../../data/available-charts';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { ChartViewComponent } from '@app/common/chart-view/chart-view.component';
import { ChartData } from '@app/models/chart-data';
import { ChartDashboardComponent } from '@app/common/chart-dashboard/chart-dashboard.component';
import { isAfter, isBefore } from 'date-fns';
import { CustomButtonComponent } from '@app/lib/custom-button/custom-button.component';
import { FormControlPipe } from '@app/shared/form-control.pipe';
import { ChartWrapperService } from '@app/chart-wrapper/chart-wrapper.service';

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
    CustomButtonComponent,
    ReactiveFormsModule,
    FormControlPipe,
  ],
  providers: [ChartWrapperService],
  templateUrl: './chart-wrapper.component.html',
  styleUrl: './chart-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartWrapperComponent implements OnInit {
  private dateLimits = [new Date(2023, 10, 1), new Date(2023, 10, 4)];

  constructor(
    private fb: FormBuilder,
    private chartWrapperService: ChartWrapperService
  ) {}

  public dateRangeControl: FormControl = new FormControl(this.dateLimits);
  public charts: ChartData[] = [];
  public chartConfig: FormGroup;

  public ngOnInit(): void {
    this.charts = chartData;
    this.chartConfig = this.chartWrapperService.generateChartForm(this.charts);
  }

  public disabledDate = (cur: Date): boolean => {
    return isBefore(cur, this.dateLimits[0]) || isAfter(cur, this.dateLimits[1]);
  };
}
