import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EpisodeListDetailed from '../components/EpisodeListDetailed';
import LoadingError from '../components/LoadingError';
import MainLayout from '../components/MainLayout';
import PageInfo from '../components/PageInfo';
import ScrollToTopButton from '../containers/ScrollToTopButton';

const Episodes = () => {
	const [episodes, setEpisodes] = useState([]);
	const [results, setResults] = useState({});
	const [pageNumber, setPageNumber] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getEpisodes = async () => {
			setIsLoading(true);
			setError(false);

			try {
				const response = await axios.get(
					`https://rickandmortyapi.com/api/episode?page=${pageNumber}`
				);
				setEpisodes((prevEpisodes) => {
					return [...prevEpisodes, ...response.data.results];
				});
				setResults(response.data.info);
				setIsLoading(false);
			} catch (err) {
				setIsLoading(false);
				setError(true);
				console.log(err);
			}
		};

		getEpisodes();
	}, [pageNumber]);
	return (
		<>
			<MainLayout error={error}>
				{error ? (
					<LoadingError />
				) : (
					<section className='flex flex-col gap-60'>
						<PageInfo
							label='Episodes'
							text='Click on your favorite episodes to find out more about them, including the original air date, and what characters appear in them!'
						/>
						<EpisodeListDetailed
							episodes={episodes}
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

export default Episodes;
