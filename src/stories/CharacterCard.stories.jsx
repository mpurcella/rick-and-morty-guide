import React from 'react';
import CharacterCard from '../components/CharacterCard';

export default {
	title: 'Character Card',
	component: CharacterCard,
	decorators: [
		(Story) => (
			<div className='w-250'>
				<Story />
			</div>
		)
	]
};

const Template = (args) => <CharacterCard {...args} />;

export const Default = Template.bind({});
Default.args = {
	imgUrl: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
	alt: 'Toxic Rick',
	status: 'Dead'
};
