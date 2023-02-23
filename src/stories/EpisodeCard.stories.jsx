import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import EpisodeCard from '../components/EpisodeCard';

export default {
	title: 'Episode Card',
	component: EpisodeCard,
	decorators: [
		(Story) => (
			<MemoryRouter>
				<ul className='grid grid-cols-1 gap-28 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					<li>
						<Story />
					</li>
				</ul>
			</MemoryRouter>
		)
	]
};

const Template = (args) => <EpisodeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
	url: '#',
	name: 'The Ricklantis Mixup',
	episode: 'S03E07'
};
