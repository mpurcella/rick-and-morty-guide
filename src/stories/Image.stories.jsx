import React from 'react';
import Image from '../components/Image';

export default {
	title: 'Image',
	component: Image,
	decorators: [
		(Story) => (
			<div className='w-250'>
				<Story />
			</div>
		)
	]
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
	imgUrl: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
	alt: 'Toxic Rick',
	className: ''
};
