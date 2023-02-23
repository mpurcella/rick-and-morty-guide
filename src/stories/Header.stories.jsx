import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../containers/Header';

export default {
	title: 'Header',
	component: Header,
	parameters: {
		layout: 'fullscreen'
	},
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		)
	]
};

export const Default = () => <Header />;
