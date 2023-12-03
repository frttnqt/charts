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
      },
      {
        id: 2,
        name: 'Sensor #2',
        value: 200,
        date: new Date(2023, 10, 2),
      },
      {
        id: 3,
        name: 'Sensor #3',
        value: 300,
        date: new Date(2023, 10, 3),
      },
      {
        id: 4,
        name: 'Sensor #4',
        value: 50,
        date: new Date(2023, 10, 4),
      },
    ],
  },
  {
    id: 2,
    name: 'Fluidity',
    data: [
      {
        id: 1,
        value: 20,
        name: 'Sensor #1',
        date: new Date(2023, 10, 1),
      },
      {
        id: 2,
        value: 30,
        name: 'Sensor #2',
        date: new Date(2023, 10, 2),
      },
      {
        id: 3,
        value: 40,
        name: 'Sensor #3',
        date: new Date(2023, 10, 3),
      },
      {
        id: 4,
        value: 50,
        name: 'Sensor #4',
        color: null,
        date: new Date(2023, 10, 4),
      },
    ],
  },
  {
    id: 3,
    name: 'Light',
    data: [
      {
        id: 1,
        value: 10,
        name: 'Sensor #1',
        date: new Date(2023, 10, 1),
      },
      {
        id: 2,
        value: 6,
        name: 'Sensor #2',
        date: new Date(2023, 10, 2),
      },
      {
        id: 3,
        value: 35,
        name: 'Sensor #3',
        date: new Date(2023, 10, 3),
      },
      {
        id: 4,
        value: 60,
        name: 'Sensor #4',
        date: new Date(2023, 10, 4),
      },
    ],
  },
  {
    id: 4,
    name: 'Petrol',
    data: [
      {
        id: 1,
        value: 100,
        name: 'Sensor #1',
        date: new Date(2023, 10, 1),
      },
      {
        id: 2,
        value: 320,
        name: 'Sensor #2',
        date: new Date(2023, 10, 2),
      },
      {
        id: 3,
        value: 400,
        name: 'Sensor #3',
        date: new Date(2023, 10, 3),
      },
      {
        id: 4,
        value: 60,
        name: 'Sensor #4',
        date: new Date(2023, 10, 4),
      },
    ],
  },
  {
    id: 5,
    name: 'Human Lives',
    data: [
      {
        id: 1,
        value: 10,
        name: 'Sensor #1',
        date: new Date(2023, 10, 1),
      },
      {
        id: 2,
        value: 5,
        name: 'Sensor #2',
        date: new Date(2023, 10, 2),
      },
      {
        id: 3,
        value: 20,
        name: 'Sensor #3',
        date: new Date(2023, 10, 3),
      },
      {
        id: 4,
        value: 15,
        name: 'Sensor #4',
        date: new Date(2023, 10, 4),
      },
    ],
  },
] as ChartData[];
