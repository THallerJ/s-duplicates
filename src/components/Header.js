import React from 'react';
import '../style/Header.css';

const Header = ({ username }) => {
	return (
		<div className="header">
			<p>{username}</p>
		</div>
	);
};

export default Header;
