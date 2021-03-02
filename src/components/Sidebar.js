import React from 'react';
import '../style/Sidebar.css';
import SpotifyLogo from '../images/spotify_white_logo.png';
import SidebarItem from './SidebarItem';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { GetUserContext } from '../context/UserContext';

const Sidebar = () => {
	const { playlists, setCurrPlaylist } = GetUserContext();

	const onClickLibrary = () => {
		setCurrPlaylist(null);
		/*getSavedTracks(token).then((resp) => console.log(resp)); */
	};

	const onClickPlaylist = (playlist) => {
		setCurrPlaylist(playlist);
		/*console.log(getPlaylistTracks(token, id).then((resp) => resp)); */
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
				{playlists?.map((playlist) => (
					<SidebarItem
						key={playlist.id}
						playlistId={playlist.id}
						onClick={() => onClickPlaylist(playlist)}
						title={playlist.name}
						imgSrc={playlist.images[0].url}
					/>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
