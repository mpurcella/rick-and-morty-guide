import React from 'react';
import ScrollToTopButton from '../containers/ScrollToTopButton';

export default {
	title: 'Scroll To Top Button',
	component: ScrollToTopButton,
	decorators: [
		(Story) => (
			<div className='h-[1500px]'>
				<p className='text-center text-14'>Scroll to bottom of the page to see button</p>
				<Story />
			</div>
		)
	]
};

export const Primary = () => <ScrollToTopButton />;
