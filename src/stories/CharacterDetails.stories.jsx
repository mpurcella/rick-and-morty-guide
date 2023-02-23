import React from 'react';
import CharacterDetails from '../components/CharacterDetails';

export default {
	title: 'Character Details',
	component: CharacterDetails,
	decorators: [
		(Story) => [
			<div>
				<Story />
			</div>
		]
	]
};

const Template = (args) => <CharacterDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
	name: 'Rick Sanchez',
	species: 'Human',
	gender: 'Male',
	type: '',
	origin: 'Earth',
	location: 'Earth'
};
