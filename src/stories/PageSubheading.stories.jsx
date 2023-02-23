import React from 'react';
import PageSubheading from '../components/PageSubheading';

export default {
	title: 'Page Subheading',
	component: PageSubheading
};

const Template = (args) => <PageSubheading {...args} />;

export const Default = Template.bind({});
Default.args = {
	text: 'Page Subheading'
};
