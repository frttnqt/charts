import { ChartData } from '@app/models/chart-data';

// Guys, as you haven't sent any examples of charts - here is just some implementation from my own thoughts.
export default [
  {
    id: 1,
    name: 'Temperature',
    selected: true,
    data: [
      {
        id: 1,
        name: 'Sensor #1',
        value: 100,
        date: new Date(2023, 10, 1),
        color: null,
      },
      {
        id: 2,
        name: 'Sensor #2',
        value: 200,
        date: new Date(2023, 10, 2),
        color: null,
      },
      {
        id: 3,
        name: 'Sensor #3',
        value: 300,
        color: null,
        date: new Date(2023, 10, 3),
      },
      {
        id: 4,
        name: 'Sensor #4',
        value: 50,
        color: null,
        date: new Date(2023, 10, 4),
      },
    ],
  },
  {
    id: 2,
    name: 'Fluidity',
    selected: true,
    data: [
      {
        id: 1,
        value: 20,
        name: '1',
        color: null,
        date: new Date(2023, 10, 1),
      },
      {
        id: 2,
        value: 30,
        name: '2',
        color: null,
        date: new Date(2023, 10, 2),
      },
      {
        id: 3,
        value: 40,
        name: '3',
        date: new Date(2023, 10, 3),
      },
      {
        id: 4,
        value: 50,
        name: '4',
        color: null,
        date: new Date(2023, 10, 4),
      },
    ],
  },
] as ChartData[];
