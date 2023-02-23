import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const showScrollButton = () => {
		if (window.scrollY > 1000) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', showScrollButton);

		return () => {
			window.removeEventListener('scroll', showScrollButton);
		};
	});

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<button
			className={classNames(
				'fixed bottom-20 right-1/2 flex h-60 w-60 translate-x-1/2 items-center justify-center rounded-lg border border-white bg-white text-24 text-black-200 shadow-lg shadow-black-100/30 outline-none duration-200 ease-out hover:border-white hover:bg-black-200 hover:text-white focus-visible:border-white focus-visible:bg-black-200 focus-visible:text-white lg:right-20 lg:translate-x-0',
				{
					'opacity-100': isVisible,
					'opacity-0': !isVisible
				}
			)}
			aria-label='Scroll to Top'
			onClick={scrollToTop}
		>
			<FaChevronUp className='relative' />
		</button>
	);
};

export default ScrollToTopButton;
