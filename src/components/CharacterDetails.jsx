import React from 'react';

const characterDetails = ({ name, species, gender, type, origin, location }) => {
	return (
		<>
			<h1 className='mb-40 text-28 font-black uppercase leading-none md:text-32'>{name}</h1>
			<div className='flex flex-col gap-24 sm:w-full sm:items-center md:items-start'>
				<p>
					<span className='font-semibold'>Species: </span>
					{species}
				</p>
				<p>
					<span className='font-semibold'>Gender: </span>
					{gender}
				</p>
				{type && (
					<p>
						<span className='font-semibold'>Type: </span>
						{type}
					</p>
				)}
				<p className='capitalize'>
					<span className='font-semibold'>Origin: </span>
					{origin}
				</p>
				<p>
					<span className='font-semibold'>Location: </span>
					{location}
				</p>
			</div>
		</>
	);
};

export default characterDetails;
