import React from 'react';
import EpisodeList from '../components/EpisodeList';
import { MemoryRouter } from 'react-router-dom';

export default {
	title: 'Episode List',
	component: EpisodeList,
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		)
	]
};

const Template = (args) => <EpisodeList {...args} />;

export const Default = Template.bind({});
Default.args = {
	episodes: [
		{
			id: 1,
			url: '#',
			name: 'Pilot',
			episode: 'S01E01'
		},
		{
			id: 2,
			url: '#',
			name: 'Lawnmower Dog',
			episode: 'S01E02'
		},
		{
			id: 3,
			url: '#',
			name: 'Anatomy Park',
			episode: 'S01E03'
		},
		{
			id: 4,
			url: '#',
			name: 'M. Night Shaym-Aliens!',
			episode: 'S01E04'
		}
	]
};
