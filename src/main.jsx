import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './containers/Header';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Character from './pages/Character';
import Episodes from './pages/Episodes';
import Episode from './pages/Episode';
import Error from './pages/Error';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/characters',
				element: <Characters />
			},
			{
				path: '/characters/:id',
				element: <Character />
			},
			{
				path: '/episodes',
				element: <Episodes />
			},
			{
				path: '/episodes/:id',
				element: <Episode />
			},
			{
				path: '*',
				element: <Error />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
