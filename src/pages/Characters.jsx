import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainLayout from '../components/MainLayout';
import PageInfo from '../components/PageInfo';
import CharacterCardList from '../components/CharacterCardList';
import ScrollToTopButton from '../containers/ScrollToTopButton';
import LoadingError from '../components/LoadingError';

const Characters = () => {
	const [characters, setCharacters] = useState([]);
	const [results, setResults] = useState({});
	const [pageNumber, setPageNumber] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getCharacters = async () => {
			setIsLoading(true);
			setError(false);

			try {
				const response = await axios.get(
					`https://rickandmortyapi.com/api/character?page=${pageNumber}`
				);
				setCharacters((prevCharacters) => {
					return [...prevCharacters, ...response.data.results];
				});
				setResults(response.data.info);
				setIsLoading(false);
			} catch (err) {
				setIsLoading(false);
				setError(true);
				console.error(err);
			}
		};

		getCharacters();
	}, [pageNumber]);

	return (
		<>
			<MainLayout error={error}>
				{error ? (
					<LoadingError />
				) : (
					<section className='flex flex-col gap-60'>
						<PageInfo
							label='Characters'
							text='Click on your favorite characters to find out more about them, including their origin, current location, and what episodes they appear in!'
						/>
						<CharacterCardList
							characters={characters}
							results={results}
							isLoading={isLoading}
							error={error}
							pageNumber={pageNumber}
							setPageNumber={setPageNumber}
						/>
					</section>
				)}
			</MainLayout>
			<ScrollToTopButton />
		</>
	);
};

export default Characters;
