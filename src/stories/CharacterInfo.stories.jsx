import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import CharacterInfo from '../components/CharacterInfo';

export default {
	title: 'Character Info',
	component: CharacterInfo,
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		)
	]
};

const Template = (args) => <CharacterInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
	imgUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
	alt: 'Rick Sanchez',
	status: 'Alive',
	name: 'Rick Sanchez',
	species: 'Human',
	gender: 'Male',
	type: '',
	origin: {
		name: 'Earth'
	},
	location: {
		name: 'Earth'
	},
	episodes: [
		'https://rickandmortyapi.com/api/episode/1',
		'https://rickandmortyapi.com/api/episode/2',
		'https://rickandmortyapi.com/api/episode/3',
		'https://rickandmortyapi.com/api/episode/4'
	]
};
