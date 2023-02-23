import React from 'react';
import RickAndMortyUpset from '../images/rickandmortyupset.png';

const LoadingError = () => {
	return (
		<section className='m-auto flex h-full w-250 flex-col justify-center lg:w-400 '>
			<img
				src={RickAndMortyUpset}
				alt='Rick and Morty Upset'
				className='w-full'
			/>
			<p className='text-center font-semibold uppercase lg:text-14'>
				Aw, geez. Something went&nbsp;wrong.
			</p>
		</section>
	);
};

export default LoadingError;
