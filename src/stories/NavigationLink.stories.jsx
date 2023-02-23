import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NavigationLink from '../components/NavigationLink';

export default {
	title: 'Navigation Link',
	component: NavigationLink,
	parameters: {
		backgrounds: {
			default: 'dark'
		}
	},
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		)
	]
};

const Template = (args) => <NavigationLink {...args} />;

export const Default = Template.bind({});
Default.args = {
	url: '#',
	label: 'Link'
};
