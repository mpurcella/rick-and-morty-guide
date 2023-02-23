import React from 'react';
import classNames from 'classnames';

const HamburgerButton = ({ isNavOpen, onClick }) => {
	return (
		<button
			type='button'
			className='z-50 flex h-24 w-28 flex-col justify-around outline-none duration-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue lg:hidden'
			onClick={onClick}
		>
			<span
				className={classNames(
					'h-3 w-full rounded bg-white transition duration-200 ease-out',
					{
						'translate-y-8 -rotate-45': isNavOpen
					}
				)}
			></span>
			<span
				className={classNames('h-3 w-full rounded bg-white transition duration-100', {
					'invisible opacity-0': isNavOpen
				})}
			></span>
			<span
				className={classNames(
					'h-3 w-full rounded bg-white transition duration-200 ease-out',
					{
						'-translate-y-8 rotate-45': isNavOpen
					}
				)}
			></span>
		</button>
	);
};

export default HamburgerButton;
