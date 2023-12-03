import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ChartConfigData, ChartConfigFormData, ChartData } from '@app/models/chart-data';
import { NzMessageService } from 'ng-zorro-antd/message';
@Injectable()
export class ChartWrapperService {
  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService
  ) {}

  // Test In progress
  public generateChartForm(charts: ChartData[]): FormGroup {
    const chartIds = charts.map(chart => chart.id);
    const configData = chartIds.reduce((acc, cur, idx) => {
      acc[cur] = this.fb.group({
        // Some simple initial verification for max amount of selected charts, as I don't know about db structure
        selected: new FormControl(idx < 4),
        type: new FormControl('bar'),
      });
      return acc;
    }, {});
    const form: FormGroup<ChartConfigFormData> = this.fb.group<ChartConfigData>(configData);

    chartIds.forEach(id => {
      const sensorControl = form.get(`${id}`);
      const getRemainingKeys = (): string[] => Object.keys(form.value).filter(key => Number(key) !== Number(id));

      sensorControl.get('selected').valueChanges.subscribe(selected => {
        if (!selected) {
          // We do not look for form value for current sensor, as its value haven't changed yet.
          // We possibly could use 'pairwise' or some other approaches as well

          const isAnySelected = getRemainingKeys().some(id => form.value[id].selected);
          if (!isAnySelected) {
            sensorControl.get('selected').patchValue(true);
            this.msg.create('warning', 'You cannot deselect all charts');
          }
        } else {
          const numberOfSelected = getRemainingKeys().reduce((acc, cur) => {
            return form.value[cur].selected ? (acc += 1) : acc;
          }, 0);

          // 3 from other instances, and +1 counted, as we check 'selected' condition
          if (numberOfSelected > 3) {
            sensorControl.get('selected').patchValue(false);
            this.msg.create('warning', 'Max amount of selected charts is 4. Please deselect some other chart');
          }
        }
      });
    });
    return form;
  }
}
