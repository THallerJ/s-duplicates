import "../style/Body.css";
import { GetUserContext } from "../context/AppContext";
import { getSavedTracks, getPlaylistTracks } from "../spotify/spotifyApi";
import { getDuplicateTracks } from "../spotify/duplicateTracks";
import DupTrackGroup from "./DupTrackGroup";
import TracksHeader from "./TracksHeader";
import PlaylistPills from "./PlaylistPills";
import Spinner from "./Spinner";

const Body = () => {
	const { currPlaylist, token, dupTracks, setDupTracks, loading, setLoading } =
		GetUserContext();

	const onClick = () => {
		setLoading(true);

		if (currPlaylist) {
			getPlaylistTracks(token, currPlaylist.id).then((resp) => {
				const dups = getDuplicateTracks(resp);
				setDupTracks(dups);
				setLoading(false);
			});
		} else {
			getSavedTracks(token).then((resp) => {
				const dups = getDuplicateTracks(resp);
				setDupTracks(dups);
				setLoading(false);
			});
		}
	};

	const DuplicateResults = () => {
		// if the user has searched for duplicate tracks
		if (dupTracks) {
			// no duplicate tracks were found
			if (dupTracks.length === 0) {
				return (
					<h1 className="center" style={{ color: "#1db954" }}>
						No duplicates found
					</h1>
				);
				// duplicate tracks were found
			} else {
				return (
					<>
						<TracksHeader />

						<div className="duplicateTracks">
							{dupTracks.map((tracks, i) => {
								return (
									<DupTrackGroup key={tracks[0].track.id} tracks={tracks} />
								);
							})}
						</div>
					</>
				);
			}
			// if the user has not yet searched for duplicate tracks
		} else {
			return (
				<div className="center">
					<h2 className="instructionText">
						Find duplicates in "
						{currPlaylist ? currPlaylist.name : "Liked Songs"}"
					</h2>
					<button className="button" onClick={onClick}>
						Find Duplicates
					</button>
				</div>
			);
		}
	};

	return (
		<div className="body">
			<PlaylistPills />
			{loading ? (
				<div className="center">
					<Spinner />
				</div>
			) : (
				<DuplicateResults />
			)}
		</div>
	);
};

export default Body;
