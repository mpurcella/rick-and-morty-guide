import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

const CharacterCardLink = ({ url, imgUrl, alt, name }) => {
	return (
		<Link
			to={url}
			className='group flex flex-col rounded-lg outline-none duration-200 ease-out hover:scale-103 hover:bg-black-200 hover:shadow-lg hover:shadow-black-200/20 
			focus-visible:scale-103 focus-visible:bg-black-200 focus-visible:shadow-lg focus-visible:shadow-black-200/20 lg:relative lg:bg-black-200 lg:shadow-lg lg:shadow-black-200/20'
		>
			<Image
				imgUrl={imgUrl}
				alt={alt}
				className='w-full rounded-lg object-cover object-center shadow-lg shadow-black-200/20 duration-200 ease-out group-hover:rounded-b-none group-hover:shadow-none group-focus-visible:rounded-b-none group-focus-visible:shadow-none lg:shadow-none lg:group-hover:rounded-b-lg lg:group-hover:opacity-8 
				lg:group-focus-visible:rounded-b-lg lg:group-focus-visible:opacity-8'
			/>
			<div className='px-12 py-16 duration-200 ease-out lg:absolute lg:top-0 lg:left-0 lg:flex lg:h-full lg:w-full lg:items-center lg:justify-center lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100'>
				<p className='text-center font-medium leading-tight duration-200 ease-out group-hover:text-white group-focus-visible:text-white'>
					{name}
				</p>
			</div>
		</Link>
	);
};

export default CharacterCardLink;
