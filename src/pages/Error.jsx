import React from 'react';
import MainLayout from '../components/MainLayout';
import Image from '../components/Image';
import Rick from '../images/rick.png';

const Error = () => {
	return (
		<div className='flex h-[calc(100vh-134px)] items-center'>
			<MainLayout>
				<div className='m-auto flex h-full flex-col items-center justify-center gap-40'>
					<Image
						imgUrl={Rick}
						alt='Rick Sanchez Squinting Eyes'
						className='w-150 md:w-300'
					/>
					<h1 className='text-center text-20 font-semibold uppercase md:text-36'>
						404 - Page Not Found
					</h1>
				</div>
			</MainLayout>
		</div>
	);
};

export default Error;
