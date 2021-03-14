import React from 'react';
import '../style/Track.css';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import { removeSavedTrack, removePlaylistTrack } from '../spotify/tracks.js';
import { GetUserContext } from '../context/UserContext';

const Track = ({ track }) => {
	const { token, currPlaylist, dupTracks, setDupTracks } = GetUserContext();

	const getTrackLength = (ms) => {
		let minutes = Math.floor(ms / 60000);
		let seconds = ((ms % 60000) / 1000).toFixed(0);

		if (seconds == 60) {
			minutes++;
			seconds = 0;
		}

		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};

	const deleteLocalTrack = (trackId) => {
		const temp = dupTracks;
		let i, j;

		for (i = 0; i < temp.length; i++) {
			for (j = 0; j < temp[i].length; j++) {
				if (temp[i][j].track.id === trackId) {
					setDupTracks(temp[i].splice(j, 1));
				}
			}
		}
	};

	const deleteTrack = () => {
		console.log(currPlaylist);

		deleteLocalTrack(track.track.id);
		console.log(dupTracks);

		if (currPlaylist) {
			//	removePlaylistTrack(token, track.track.uri, currPlaylist.id);
		} else {
			//removeSavedTrack(token, track.track.id);
		}
	};

	return (
		// make sure to include all artists
		<div className="track">
			<h1 className="title">{track.track.name}</h1>
			<h1 className="title">{track.track.artists[0].name}</h1>
			<h1 className="title">{track.track.album.name}</h1>
			<h1 className="title">{getTrackLength(track.track.duration_ms)}</h1>

			<IconButton style={{ padding: '0px' }} onClick={deleteTrack}>
				<ClearIcon style={{ color: '#ffa4a2' }} />
			</IconButton>
		</div>
	);
};

export default Track;
