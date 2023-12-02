export interface ChartMeter {
  id: number;
  name: string;
  value: number;
  date: Date;
}
export interface ChartData {
  id: number;
  name: string;
  type: 'line' | 'bar';
  data: ChartMeter[];
}

export interface ChartConfigData {
  [id: number]: {
    type: 'line' | 'bar';
    selected: boolean;
  };
}
