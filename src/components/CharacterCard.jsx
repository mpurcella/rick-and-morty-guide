import React from 'react';
import Image from './Image';
import classNames from 'classnames';

const CharacterCard = ({ imgUrl, alt, status }) => {
	return (
		<div
			className={classNames('rounded-lg shadow-lg shadow-black-100/30', {
				'bg-green': status === 'Alive',
				'bg-red': status === 'Dead',
				'bg-black-200': status === 'unknown'
			})}
		>
			<Image
				imgUrl={imgUrl}
				alt={alt}
				className='w-full rounded-t-lg object-cover object-center'
			/>
			<p className='px-12 py-16 text-center text-24 font-black uppercase text-white'>
				{status}
			</p>
		</div>
	);
};

export default CharacterCard;
