import React, { useEffect } from 'react';
import '../style/Sidebar.css';
import SpotifyLogo from '../images/spotify_white_logo.png';
import SidebarItem from './SidebarItem';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { GetUserContext } from '../context/UserContext';

const Sidebar = () => {
	const { playlists } = GetUserContext();

	useEffect(() => {
		console.log(playlists);
	}, [playlists]);

	const onClickPlaylist = (id) => {
		console.log(id);
	};

	/* look up how to pass parameer to function passed ti component*/

	return (
		<div className="sidebar">
			<img className="sidebarLogo" src={SpotifyLogo} alt="" />
			<SidebarItem title="Library" Icon={LibraryMusicIcon} />
			<strong className="sidebarTitle">PLAYLISTS</strong>
			<hr />
			<div className="sidebarItems">
				{playlists?.items?.map((playlist) => (
					<SidebarItem
						key={playlist.id}
						className="test"
						onClick={() => onClickPlaylist(playlist.id)}
						title={playlist.name}
						imgSrc={playlist.images[0].url}
					/>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
