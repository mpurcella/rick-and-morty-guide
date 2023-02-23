import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharacterCardLink from '../components/CharacterCardLink';

const EpisodeInfo = ({ name, episode, date, characters, isLoaded }) => {
	const [characterData, setCharacterData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setError(false);

		if (isLoaded) {
			Promise.all(characters.map((character) => fetch(character)))
				.then((responses) => {
					return Promise.all(responses.map((response) => response.json()));
				})
				.then((data) => setCharacterData(data));
		} else {
			return;
		}

		// characters.map((character) => {
		// 	const getCharacterData = async () => {
		// 		try {
		// 			const response = await axios.get(character);
		// 			setCharacterData((prevCharacters) => {
		// 				return [...prevCharacters, response.data];
		// 			});
		// 			setIsLoading(false);
		// 		} catch (err) {
		// 			setIsLoading(false);
		// 			setError(true);
		// 			console.log(err);
		// 		}
		// 	};

		// 	getCharacterData();
		// });
	}, [isLoaded]);

	return (
		<div className='flex flex-col divide-y-2 divide-black-100/20'>
			<div className='flex flex-col items-center gap-28 pb-40'>
				<h1 className='text-center text-28 font-black uppercase leading-none md:text-32'>
					"{name}"
				</h1>
				<p className='text-14'>{episode}</p>
				<p>
					<span className='font-semibold'>Premiere Date:</span> {date}
				</p>
			</div>
			<div className='flex flex-col gap-40 pt-40'>
				<h2 className='text-20 font-black uppercase md:text-24'>Characters:</h2>
				<ul className='grid grid-cols-1 gap-28 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{characterData.map((character) => {
						return (
							<li key={character.id}>
								<CharacterCardLink
									url={`/characters/${character.id}`}
									imgUrl={character.image}
									alt={character.name}
									name={character.name}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default EpisodeInfo;
