import React, { useState, useEffect } from "react";
import "../style/Body.css";
import Header from "./Header";
import { GetUserContext } from "../context/UserContext";
import ReactSpinner from "react-bootstrap-spinner";
import { getPlaylistTracks, getDuplicateTracks } from "../spotify/playlists";
import { getSavedTracks } from "../spotify/tracks";
import Track from "./Track";

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
				setDupTracks(getDuplicateTracks(resp));
				setLoading(false);
			});
		} else {
			getSavedTracks(token).then((resp) => {
				setDupTracks(getDuplicateTracks(resp));
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
						<Track />
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
