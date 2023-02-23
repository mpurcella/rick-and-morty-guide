import React from 'react';
import HamburgerButton from '../components/HamburgerButton';

export default {
	title: 'Hamburger Button',
	component: HamburgerButton,
	parameters: {
		backgrounds: {
			default: 'dark'
		}
	},
	decorators: [
		(Story) => (
			<div>
				<p className='hidden text-center text-14 text-white lg:block'>
					Screen must be &#60; 1024px to see button
				</p>
				<Story />
			</div>
		)
	]
};

const Template = (args) => <HamburgerButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	isNavOpen: false
};
