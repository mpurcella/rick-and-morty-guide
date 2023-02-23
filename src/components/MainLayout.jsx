import React from 'react';
import classNames from 'classnames';

const MainLayout = ({ error, children }) => {
	return (
		<div
			className={classNames('m-auto max-w-screen-xl p-40', {
				'h-[calc(100vh-134px)]': error
			})}
		>
			{children}
		</div>
	);
};

export default MainLayout;
