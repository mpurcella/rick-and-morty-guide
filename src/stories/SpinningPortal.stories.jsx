import React from 'react';
import SpinningPortal from '../components/SpinningPortal';

export default {
	title: 'Spinning Portal',
	component: SpinningPortal,
	parameters: {
		backgrounds: {
			default: 'dark'
		}
	}
};

const Template = (args) => <SpinningPortal {...args} />;

export const Default = Template.bind({});
Default.args = {
	imgClassName: 'w-200 animate-spin-slow object-center opacity-40 sm:w-250 md:w-300 lg:w-400'
};
