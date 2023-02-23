import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerButton from '../components/HamburgerButton';
import NavigationLink from '../components/NavigationLink';
import NavigationList from '../components/NavigationList';

const useMediaQuery = (mediaQuery) => {
	const [mql] = useState(() => window.matchMedia(mediaQuery));
	const [matches, setMatches] = useState(mql.matches);

	useEffect(() => {
		const screenResize = (e) => {
			setMatches(e.matches);
		};

		mql.addEventListener('change', screenResize);

		return () => {
			mql.removeEventListener('change', screenResize);
		};
	}, [mql]);

	return matches;
};

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(() => false);
	const isScreenWide = useMediaQuery('(min-width: 1024px)');

	const handleIsNavOpen = () => {
		setIsNavOpen((currentIsNavOpen) => !currentIsNavOpen);
	};

	const closeNav = () => {
		setIsNavOpen(false);
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		if (isScreenWide) {
			setIsNavOpen(false);
		}
	});

	const navigationLinks = [
		{
			label: 'Characters',
			url: '/characters'
		},
		{
			label: 'Episodes',
			url: '/episodes'
		}
	];
	return (
		<header className='sticky top-0 left-0 z-50 bg-black-300 px-40 py-20 shadow-lg shadow-black-100/30'>
			<nav className='m-auto flex items-center justify-between lg:max-w-screen-lg'>
				<Link
					to='/'
					className='font-get-schwifty text-24  tracking-tighter text-blue outline-none duration-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue'
					onClick={closeNav}
					onFocus={scrollToTop}
				>
					Rick and Morty
				</Link>
				<HamburgerButton
					isNavOpen={isNavOpen}
					onClick={handleIsNavOpen}
				/>
				<NavigationList
					isNavOpen={isNavOpen}
					isScreenWide={isScreenWide}
				>
					{navigationLinks.map((item) => {
						return (
							<li key={item.label}>
								<NavigationLink
									url={item.url}
									label={item.label}
									onClick={closeNav}
								/>
							</li>
						);
					})}
				</NavigationList>
			</nav>
		</header>
	);
};

export default Header;
