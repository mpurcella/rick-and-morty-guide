import React from 'react';
import PageHeading from '../components/PageHeading';

export default {
	title: 'Page Heading',
	component: PageHeading
};

const Template = (args) => <PageHeading {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: 'Page Heading'
};
