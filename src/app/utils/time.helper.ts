import { ChartMeter } from '@app/models/chart-data';
import { isWithinInterval } from 'date-fns';

export function isDataWithinTimeInterval(sensor: ChartMeter, dateRange: Date[]): boolean {
  return isWithinInterval(sensor.date, { start: dateRange[0], end: dateRange[1] });
}
