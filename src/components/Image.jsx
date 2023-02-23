import React from 'react';

const Image = ({ imgUrl, alt, className }) => {
	return (
		<img
			src={imgUrl}
			alt={alt}
			className={className}
			lazy='true'
		/>
	);
};

export default Image;
