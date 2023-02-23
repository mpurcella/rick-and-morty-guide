import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EpisodeInfo from '../components/EpisodeInfo';
import LoadingError from '../components/LoadingError';
import MainLayout from '../components/MainLayout';

const Episode = () => {
	const { id } = useParams();
	const [episode, setEpisode] = useState({});
	const [characters, setCharacters] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getEpisode = async () => {
			setIsLoading(true);
			setIsLoaded(false);
			setError(false);

			try {
				const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
				setEpisode(response.data);
				setCharacters(response.data.characters);
				setIsLoading(false);
				setIsLoaded(true);
			} catch (err) {
				setIsLoading(false);
				setIsLoaded(false);
				setError(true);
				console.log(err);
			}
		};

		getEpisode();
	}, []);

	return (
		<MainLayout>
			{error ? (
				<LoadingError />
			) : (
				<EpisodeInfo
					name={episode.name}
					episode={episode.episode}
					date={episode.air_date}
					characters={characters}
					isLoaded={isLoaded}
				/>
			)}
		</MainLayout>
	);
};

export default Episode;
