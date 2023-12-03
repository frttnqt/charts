import { FormControl } from '@angular/forms';

export interface ChartMeter {
  id: number;
  name: string;
  value: number;
  date: Date;
}
export interface ChartData {
  id: number;
  name: string;
  data: ChartMeter[];
}

export interface SensorData {
  type: 'line' | 'bar';
  selected: boolean;
}

export interface ChartConfigData {
  [id: number]: SensorData;
}
export interface ChartConfigFormData {
  [id: number]: FormControl<SensorData>;
}
