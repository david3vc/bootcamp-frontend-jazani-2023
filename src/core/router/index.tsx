import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import Admin from '../layouts/Admin';
import Home from '../../home';
import InvestmentTypeSearch from '../../mcs/investment-types/views/searchs';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Admin />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/investment-types',
				element: <InvestmentTypeSearch />,
			},
		],
	},
];

export default createBrowserRouter(routes);
