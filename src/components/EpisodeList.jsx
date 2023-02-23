import React from 'react';
import EpisodeCard from './EpisodeCard';

const EpisodeList = ({ episodes }) => {
	return (
		<ul className='grid grid-cols-1 gap-28 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
			{episodes.map((episode) => {
				return (
					<li key={episode.id}>
						<EpisodeCard
							url={`/episodes/${episode.id}`}
							name={episode.name}
							episode={episode.episode}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default EpisodeList;
