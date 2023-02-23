import React, { useRef, useCallback } from 'react';
import classNames from 'classnames';
import EpisodeCard from './EpisodeCard';

const EpisodeListDetailed = ({
	episodes,
	results,
	isLoading,
	error,
	pageNumber,
	setPageNumber
}) => {
	const intObserver = useRef();
	const lastEpisode = useCallback(
		(episode) => {
			if (isLoading) return;
			if (intObserver.current) intObserver.current.disconnect();

			intObserver.current = new IntersectionObserver((episodes) => {
				if (episodes[0].isIntersecting && results.pages !== pageNumber) {
					setPageNumber((prevPageNumber) => prevPageNumber + 1);
				}
			});

			if (episode) intObserver.current.observe(episode);
		},
		[isLoading]
	);

	return (
		<ul
			className={classNames(
				'grid grid-cols-1 gap-28 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
				{
					hidden: error
				}
			)}
		>
			{episodes.map((episode, index) => {
				if (episodes.length === index + 1) {
					return (
						<li
							key={episode.id}
							ref={lastEpisode}
						>
							<EpisodeCard
								url={`/episodes/${episode.id}`}
								name={episode.name}
								episode={episode.episode}
							/>
						</li>
					);
				}
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

export default EpisodeListDetailed;
