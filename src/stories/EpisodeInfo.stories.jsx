import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import EpisodeInfo from '../components/EpisodeInfo';

export default {
	title: 'Episode Info',
	component: 'EpisodeInfo',
	decorators: [
		(Story) => [
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		]
	]
};

const Template = (args) => <EpisodeInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
	name: 'Mortynight Run',
	date: 'August 2, 2015',
	characters: [
		'https://rickandmortyapi.com/api/character/1',
		'https://rickandmortyapi.com/api/character/2'
	]
};
