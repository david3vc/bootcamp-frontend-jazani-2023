import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import Admin from '../layouts/Admin';
import Home from '../../home';
import InvestmentTypeSearch from '../../mcs/investment-types/views/searchs';
import Auth from '../layouts/Auth';
import Login from '../../auth/login/views';

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
	{
		path: '/login',
		element: <Auth />,
		children: [
			{
				index: true,
				element: <Login />,
			},
		],
	},
];

export default createBrowserRouter(routes);
