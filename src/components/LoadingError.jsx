import React from 'react';
import RickAndMortyUpset from '../images/rickandmortyupset.png';

const LoadingError = () => {
	return (
		<div className='m-auto flex h-full flex-col items-center justify-center'>
			<img
				src={RickAndMortyUpset}
				alt='Rick and Morty Upset'
				className='w-250 md:w-400'
			/>
			<p className='text-center font-semibold uppercase md:text-24'>
				Aw, geez. Something went&nbsp;wrong.
			</p>
		</div>
	);
};

export default LoadingError;
