import React from 'react';
import SpinningPortal from './SpinningPortal';

const Hero = () => {
	return (
		<div className='relative flex h-full items-center justify-center bg-black-200'>
			<SpinningPortal imgClassName='w-200 animate-spin-slow object-center opacity-30 sm:w-250 md:w-300 lg:w-400' />
			<div className='absolute p-40'>
				<h1 className='text-center text-24 font-black uppercase  text-white md:text-36'>
					The Interdimensional...
					<br />
					Guide to Rick and Morty
				</h1>
			</div>
		</div>
	);
};

export default Hero;
