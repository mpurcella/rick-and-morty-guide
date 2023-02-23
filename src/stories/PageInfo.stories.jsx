import React from 'react';
import PageInfo from '../components/PageInfo';

export default {
	title: 'Page Info',
	component: PageInfo
};

const Template = (args) => <PageInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: 'Page Heading',
	text: 'This is the page subheading'
};
