import React from "react";
import Modal from "react-modal";
import "../style/DeleteDialog.css";
import { GetUserContext } from "../context/AppContext";
import {
	removeSavedTrack,
	removePlaylistTrack,
	getTrackArtists,
} from "../spotify/spotifyApi.js";

const DeleteDialog = ({ track, open, setOpen, onConfirm, onCancel }) => {
	const { token, currPlaylist, dupTracks, setDupTracks } = GetUserContext();

	const deleteLocalTrack = (trackId) => {
		let i, j;

		for (i = 0; i < dupTracks.length; i++) {
			for (j = 0; j < dupTracks[i].length; j++) {
				if (dupTracks[i][j].track.id === trackId) {
					// remove duplicate track
					dupTracks[i].splice(j, 1);

					// remove array of duplicates if there are no duplicates remaining
					if (dupTracks[i].length < 2) {
						dupTracks.splice(i, 1);
						setDupTracks([...dupTracks]);
						return;
					}

					setDupTracks([...dupTracks]);
				}
			}
		}
	};

	const deleteTrack = () => {
		deleteLocalTrack(track.track.id);

		if (currPlaylist) {
			removePlaylistTrack(token, track.track.uri, currPlaylist.id);
		} else {
			removeSavedTrack(token, track.track.id);
		}
	};

	const renderContent = (
		<div className="dialogBody">
			<h2>Confirm Deletion</h2>
			<hr />
			<div className="contentLine">
				<span className="contentInfo">Song: </span>
				<span>{track.track.name}</span>
			</div>
			<div className="contentLine">
				<span className="contentInfo">Artist: </span>
				<span>{getTrackArtists(track)}</span>
			</div>
			<div className="contentLine">
				<span className="contentInfo">Album: </span>
				<span>{track.track.album.name}</span>
			</div>
			<div className="buttonGroup">
				<button className="btn cancelButton" onClick={() => setOpen(false)}>
					CANCEL
				</button>
				<button className="btn okButton" onClick={deleteTrack}>
					OK
				</button>
			</div>
		</div>
	);
	return (
		<Modal
			className="modal"
			isOpen={open}
			overlayClassName="overlay"
			shouldCloseOnOverlayClick={true}
			onRequestClose={() => setOpen(false)}
		>
			{renderContent}
		</Modal>
	);
};

export default DeleteDialog;
