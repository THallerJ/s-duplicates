import React from "react";
import "../style/PlaylistPill.css";
import { GetUserContext } from "../context/AppContext";

const PlaylistPill = ({ playlistId, onClick, title }) => {
	const { currPlaylist } = GetUserContext();

	function getSelectedClass() {
		if (currPlaylist && currPlaylist.id === playlistId) return "pillSelected";
		if (currPlaylist == null && playlistId == null) return "pillSelected";

		return null;
	}

	return (
		<div
			className={`pill ${getSelectedClass()}`}
			onClick={onClick}
			key={`${playlistId}-pill`}>
			{title}
		</div>
	);
};

export default PlaylistPill;
