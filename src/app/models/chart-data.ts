export interface ChartMeter {
  id: number;
  name: string;
  value: number;
  color: string;
  date: Date;
}
export interface ChartData {
  id: number;
  name: string;
  type: 'line' | 'bar';
  data: ChartMeter[];
  selected: boolean;
}

export interface ChartConfigData {
  [id: number]: {
    type: 'line' | 'bar';
    selected: boolean;
  };
}
