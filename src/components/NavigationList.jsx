import React from 'react';
import classNames from 'classnames';

const NavigationList = ({ children, isNavOpen, isScreenWide }) => {
	return (
		<ul
			className={classNames(
				'fixed bottom-0 flex h-[calc(100vh-76px)] w-full flex-col items-center justify-center gap-40 bg-black-100 p-28 <lg:navlist-transition lg:static lg:h-auto lg:w-auto lg:flex-row lg:items-start lg:gap-60 lg:bg-transparent lg:bg-auto lg:p-0',
				{
					'left-full': !isNavOpen && !isScreenWide,
					'left-0': isNavOpen
				}
			)}
		>
			{children}
		</ul>
	);
};

export default NavigationList;
