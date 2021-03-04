import React, { useState, useEffect } from "react";
import "../style/Body.css";
import Header from "./Header";
import { GetUserContext } from "../context/UserContext";
import ReactSpinner from "react-bootstrap-spinner";
import { getPlaylistTracks, getDuplicateTracks } from "../spotify/playlists";
import { getSavedTracks } from "../spotify/tracks";
import DupTrackGroup from "./DupTrackGroup";

const Body = () => {
	const [loading, setLoading] = useState(false);
	const {
		currPlaylist,
		user,
		token,
		dupTracks,
		setDupTracks,
	} = GetUserContext();

	const onClick = () => {
		setLoading(true);

		if (currPlaylist) {
			getPlaylistTracks(token, currPlaylist.id).then((resp) => {
				const dups = getDuplicateTracks(resp);
				setDupTracks(dups);
				console.log(dups);
				setLoading(false);
			});
		} else {
			getSavedTracks(token).then((resp) => {
				const dups = getDuplicateTracks(resp);
				setDupTracks(dups);
				console.log(dups);
				setLoading(false);
			});
		}
	};

	return (
		<div className="body">
			<Header username={user ? user : ""} />

			{loading ? (
				<div className="center">
					<ReactSpinner
						className="center"
						type="border"
						color="secondary"
						size="5"
					/>
				</div>
			) : (
				<div>
					{dupTracks ? (
						dupTracks.length === 0 ? (
							<h1 style={{ color: "red" }}>No duplicates found</h1>
						) : (
							dupTracks.map((track) => (
								<DupTrackGroup key={track[0].added_at} />
							))
						)
					) : (
						<button className="button center" onClick={onClick}>
							Find Duplicates
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default Body;
