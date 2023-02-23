import React from 'react';
import Hero from '../components/Hero';

export default {
	title: 'Hero',
	component: Hero,
	parameters: {
		layout: 'fullscreen'
	},
	decorators: [
		(Story) => (
			<div className='h-screen'>
				<Story />
			</div>
		)
	]
};

export const Default = () => <Hero />;
