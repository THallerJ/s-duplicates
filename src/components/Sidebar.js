import React from 'react';
import '../style/Sidebar.css';
import SpotifyLogo from '../images/spotify_white_logo.png';
import SidebarItem from './SidebarItem';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<img className="sidebarLogo" src={SpotifyLogo} alt="" />
			<SidebarItem title="Library" Icon={LibraryMusicIcon} />
			<strong className="sidebarTitle">PLAYLISTS</strong>
			<hr />
			<SidebarItem
				title="Thing"
				imgSrc="https://i.scdn.co/image/ab67616d0000b273f126b5a1693a25b14396ad94"
			/>
			<SidebarItem
				title="Other"
				imgSrc="https://i.scdn.co/image/ab67616d0000b273f126b5a1693a25b14396ad94"
			/>
		</div>
	);
};

export default Sidebar;
