import React from 'react';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='bg-black-300 px-40 py-20'>
			<p className='text-center text-12 uppercase text-grey'>
				&#169; {year} Rick and Morty Guide. All&nbsp;Rights&nbsp;Reserved.
			</p>
		</footer>
	);
};

export default Footer;
