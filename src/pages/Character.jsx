import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import CharacterInfo from '../components/CharacterInfo';
import LoadingError from '../components/LoadingError';

const Character = () => {
	const { id } = useParams();
	const [character, setCharacter] = useState({});
	const [episodes, setEpisodes] = useState([]);
	const [origin, setOrigin] = useState({});
	const [location, setLocation] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getCharacter = async () => {
			setIsLoading(true);
			setIsLoaded(false);
			setError(false);

			try {
				const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
				setCharacter(response.data);
				setOrigin(response.data.origin);
				setLocation(response.data.location);
				setEpisodes(response.data.episode);
				setIsLoading(false);
				setIsLoaded(true);
			} catch (err) {
				setIsLoading(false);
				setIsLoaded(false);
				setError(true);
				console.log(err);
			}
		};

		getCharacter();
	}, []);

	return (
		<MainLayout error={error}>
			{error ? (
				<LoadingError />
			) : (
				<CharacterInfo
					imgUrl={character.image}
					alt={character.name}
					status={character.status}
					name={character.name}
					species={character.species}
					gender={character.gender}
					type={character.type}
					origin={origin}
					location={location}
					episodes={episodes}
					isLoaded={isLoaded}
				/>
			)}
		</MainLayout>
	);
};

export default Character;
