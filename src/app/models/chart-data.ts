export interface ChartData {
  id: number;
  name: string;
  type: 'line' | 'bar';
  data: { id: number; value: number; color: string; date: Date }[];
  selected: boolean;
}

export interface ChartConfigData {
  [id: number]: {
    type: 'line' | 'bar';
    selected: boolean;
  };
}
