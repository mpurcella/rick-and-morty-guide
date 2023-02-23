import React from 'react';
import PageHeading from './PageHeading';
import PageSubheading from './PageSubheading';

const PageInfo = ({ label, text }) => {
	return (
		<div className='flex flex-col gap-20'>
			<PageHeading label={label} />
			<PageSubheading text={text} />
		</div>
	);
};

export default PageInfo;
