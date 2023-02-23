import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import CharacterDetails from './CharacterDetails';
import EpisodeList from './EpisodeList';

const CharacterInfo = ({
	imgUrl,
	alt,
	status,
	name,
	species,
	gender,
	type,
	origin,
	location,
	episodes,
	isLoaded
}) => {
	const [episodeData, setEpisodeData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setError(false);

		Promise.all(episodes.map((episode) => fetch(episode)))
			.then((responses) => {
				return Promise.all(responses.map((response) => response.json()));
			})
			.then((data) => setEpisodeData(data));

		// episodes.map((episode) => {
		// 	const getEpisodeData = async () => {
		// 		try {
		// 			const response = await axios.get(episode);
		// 			setEpisodeData((prevEpisodes) => {
		// 				return [...prevEpisodes, response.data];
		// 			});
		// 			setIsLoading(false);
		// 		} catch (err) {
		// 			setIsLoading(false);
		// 			setError(true);
		// 			console.log(err);
		// 		}
		// 	};

		// 	getEpisodeData();
		// });
	}, [isLoaded]);

	return (
		<div className='flex flex-col divide-y-2 divide-black-100/20'>
			<section className='flex flex-col gap-60 pb-40 md:flex-row'>
				<div className='sm:m-auto sm:max-w-300 md:m-0 md:w-1/2 md:max-w-none lg:w-2/5'>
					<CharacterCard
						imgUrl={imgUrl}
						alt={alt}
						status={status}
					/>
				</div>
				<div className='sm:flex sm:flex-col sm:items-center md:w-1/2 md:items-start lg:w-3/5'>
					<CharacterDetails
						name={name}
						species={species}
						gender={gender}
						type={type}
						origin={origin.name}
						location={location.name}
					/>
				</div>
			</section>
			<section className='flex flex-col gap-40 pt-40'>
				<h2 className='text-20 font-black uppercase md:text-24'>Appears In:</h2>
				<EpisodeList episodes={episodeData} />
			</section>
		</div>
	);
};

export default CharacterInfo;
