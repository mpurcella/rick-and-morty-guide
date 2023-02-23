import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import PortalLogo from '../images/portal-logo.png';

const EpisodeCard = ({ url, name, episode }) => {
	return (
		<Link
			to={url}
			className='relative block rounded-lg border-2 border-transparent bg-black-200 p-20 shadow-lg shadow-black-100/30 outline-none duration-200 ease-out  hover:border-white focus-visible:border-white'
		>
			<Image
				imgUrl={PortalLogo}
				alt='Rick and Morty Falling out of Green and Yellow Portal'
			/>
			<div className='absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center gap-20 rounded-lg bg-black-200/90 p-20 leading-tight'>
				<p className='text-center text-18 text-white'>"{name}"</p>
				<p className='text-14 text-grey'>{episode}</p>
			</div>
		</Link>
	);
};

export default EpisodeCard;
