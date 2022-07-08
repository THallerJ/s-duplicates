import React from "react";
import "../style/Body.css";
import { GetUserContext } from "../context/AppContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getSavedTracks, getPlaylistTracks } from "../spotify/spotifyApi";
import { getDuplicateTracks } from "../spotify/duplicateTracks";
import DupTrackGroup from "./DupTrackGroup";
import TracksHeader from "./TracksHeader";

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
					<div className="duplicateTracks">
						<TracksHeader />
						{dupTracks.map((tracks) => {
							return <DupTrackGroup key={tracks[0].track.id} tracks={tracks} />;
						})}
					</div>
				);
			}
			// if the user has not yet searched for duplicate tracks
		} else {
			return (
				<button className="button center" onClick={onClick}>
					Find Duplicates
				</button>
			);
		}
	};

	return (
		<div className="body">
			{loading ? (
				<div className="center">
					<CircularProgress style={{ color: "white" }} />
				</div>
			) : (
				<DuplicateResults />
			)}
		</div>
	);
};

export default Body;
