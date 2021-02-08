import React from 'react';
import '../style/Sidebar.css';
import SpotifyLogo from '../images/spotify_white_logo.png';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<img className="sidebarLogo" src={SpotifyLogo} alt="" />
		</div>
	);
};

export default Sidebar;
