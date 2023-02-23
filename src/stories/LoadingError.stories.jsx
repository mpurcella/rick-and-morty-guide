import React from 'react';
import LoadingError from '../components/LoadingError';

export default {
	title: 'Loading Error',
	component: LoadingError,
	decorators: [
		(Story) => (
			<div className='flex h-[calc(100vh-40px)] flex-col items-center justify-center'>
				<Story />
			</div>
		)
	]
};

export const Default = () => <LoadingError />;
