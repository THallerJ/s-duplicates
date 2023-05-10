import React from "react";
import "../style/Sidebar.css";
import SpotifyLogo from "../images/spotify_white_logo.png";
import SidebarItem from "./SidebarItem";
import { GetUserContext } from "../context/AppContext";
import { ReactComponent as MusicIcon } from "../icons/music.svg";

const Sidebar = () => {
	const { playlists, setCurrPlaylist, setDupTracks, loading } =
		GetUserContext();

	const onClickLibrary = () => {
		if (!loading) {
			setDupTracks(null);
			setCurrPlaylist(null);
		}
	};

	const onClickPlaylist = (playlist) => {
		if (!loading) {
			setDupTracks(null);
			setCurrPlaylist(playlist);
		}
	};

	return (
		<div className="sidebar">
			<img className="sidebarLogo" src={SpotifyLogo} alt="" />
			<SidebarItem
				title="Liked Songs"
				onClick={onClickLibrary}
				Icon={MusicIcon}
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
						imgSrc={playlist.images[0] ? playlist.images[0].url : null}
					/>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
