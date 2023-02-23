import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import CharacterCardLink from '../components/CharacterCardLink';

export default {
	title: 'Character Card Link',
	component: CharacterCardLink,
	decorators: [
		(Story) => (
			<MemoryRouter>
				<div className='w-250'>
					<Story />
				</div>
			</MemoryRouter>
		)
	]
};

const Template = (args) => <CharacterCardLink {...args} />;

export const Default = Template.bind({});
Default.args = {
	url: '#',
	imgUrl: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
	alt: 'Toxic Rick',
	name: 'Toxic Rick'
};
