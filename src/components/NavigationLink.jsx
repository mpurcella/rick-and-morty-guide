import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ url, label, onClick }) => {
	return (
		<NavLink
			to={url}
			className={({ isActive }) => (isActive ? 'navlink border-b-blue' : 'navlink')}
			onClick={onClick}
		>
			{label}
		</NavLink>
	);
};

export default NavigationLink;
