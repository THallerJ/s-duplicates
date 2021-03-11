import React from 'react';
import '../style/Track.css';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import { removeSavedTrack } from '../spotify/tracks.js';
import { GetUserContext } from '../context/UserContext';
import { NativeSelect } from '@material-ui/core';

const Track = ({ track }) => {
	const { token, currPlaylist } = GetUserContext();

	const getTrackLength = (ms) => {
		let minutes = Math.floor(ms / 60000);
		let seconds = ((ms % 60000) / 1000).toFixed(0);

		if (seconds == 60) {
			minutes++;
			seconds = 0;
		}

		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};

	return (
		// make sure to include all artists
		<div className="track">
			<h1 className="title">{track.track.name}</h1>
			<h1 className="title">{track.track.artists[0].name}</h1>
			<h1 className="title">{track.track.album.name}</h1>
			<h1 className="title">{getTrackLength(track.track.duration_ms)}</h1>

			<IconButton
				style={{ padding: '0px' }}
				onClick={() => {
					removeSavedTrack(token, track.track.uri, currPlaylist.id);
				}}
			>
				<ClearIcon style={{ color: '#ffa4a2' }} />
			</IconButton>
		</div>
	);
};

export default Track;
