import React, { useEffect } from 'react';
import '../style/Sidebar.css';
import SpotifyLogo from '../images/spotify_white_logo.png';
import SidebarItem from './SidebarItem';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { GetUserContext } from '../context/UserContext';
import { getPlaylistTracks } from '../spotify/playlists';
import { getSavedTracks } from '../spotify/tracks';

const Sidebar = () => {
	const { token, playlists } = GetUserContext();

	useEffect(() => {
		console.log(playlists);
	}, [playlists]);

	const onClickLibrary = () => {
		getSavedTracks(token).then((resp) => console.log(resp));
	};

	const onClickPlaylist = (id) => {
		console.log(getPlaylistTracks(token, id, 0).then((resp) => resp));
	};

	return (
		<div className="sidebar">
			<img className="sidebarLogo" src={SpotifyLogo} alt="" />
			<SidebarItem
				title="Library"
				onClick={onClickLibrary}
				Icon={LibraryMusicIcon}
			/>
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
