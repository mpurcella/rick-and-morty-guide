import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import CharacterCardList from '../components/CharacterCardList';

export default {
	title: 'Character Card List',
	component: CharacterCardList,
	decorators: [
		(Story) => (
			<MemoryRouter>
				<div className='m-auto flex max-w-screen-xl flex-col gap-60 p-40'>
					<Story />
				</div>
			</MemoryRouter>
		)
	]
};

const Template = (args) => <CharacterCardList {...args} />;

export const Default = Template.bind({});
Default.args = {
	characters: [
		{
			url: '#',
			id: 1,
			image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
			name: 'Rick Sanchez'
		},
		{
			url: '#',
			id: 2,
			image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
			name: 'Morty Smith'
		},
		{
			url: '#',
			id: 3,
			image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
			name: 'Jerry Smith'
		},
		{
			url: '#',
			id: 4,
			image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
			name: 'Summer Smith'
		}
	]
};
