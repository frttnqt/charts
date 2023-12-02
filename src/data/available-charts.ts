import {ChartData} from '@app/models/chart-data';

export default [
	{
		id: 1,
		name: 'Temperature',
		type: 'line',
		selected: true,
		data: [
			{
				id: 1,
				value: 300,
				date: new Date(2023, 11, 1),
				color: null,
			},
			{
				id: 2,
				value: 300,
				date: new Date(2023, 11, 2),
				color: null,
			},
			{
				id: 3,
				value: 300,
				color: null,
				date: new Date(2023, 11, 3),
			},
			{
				id: 4,
				value: 300,
				color: null,
				date: new Date(2023, 11, 4),
			}
		]
	},
	{
		id: 2,
		name: 'Fluidity',
		type: 'bar',
		selected: true,
		data: [
			{
				id: 1,
				value: 20,
				color: null,
				date: new Date(2023, 11, 1),
			},
			{
				id: 2,
				value: 30,
				color: null,
				date: new Date(2023, 11, 2),
			},
			{
				id: 3,
				value: 40,
				date: new Date(2023, 11, 3),

			},
			{
				id: 4,
				value: 50,
				color: null,
				date: new Date(2023, 11, 4),
			}
		]
	}
] as ChartData[];
