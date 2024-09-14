import { GetUserContext } from "../context/AppContext";
import PlaylistPill from "./PlaylistPill";
import "../style/PlaylistPills.css";

const PlaylistPills = () => {
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
		<div className="playlistPills">
			<PlaylistPill title="Liked Songs" onClick={onClickLibrary} />
			{playlists?.map((playlist) => (
				<PlaylistPill
					key={playlist.id}
					playlistId={playlist.id}
					onClick={() => onClickPlaylist(playlist)}
					title={playlist.name}
				/>
			))}
		</div>
	);
};

export default PlaylistPills;
