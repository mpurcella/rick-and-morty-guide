import React from 'react';
import Portal from '../images/portal.png';

const SpinningPortal = ({ imgClassName }) => {
	return (
		<img
			src={Portal}
			alt='Green and Yellow Portal'
			className={imgClassName}
		/>
	);
};

export default SpinningPortal;
