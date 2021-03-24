import React, { useState } from 'react';
import '../style/Track.css';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import { removeSavedTrack, removePlaylistTrack } from '../spotify/tracks.js';
import { GetUserContext } from '../context/UserContext';
import ConfirmDialog from './ConfirmDialog';

const Track = ({ track }) => {
	const { token, currPlaylist, dupTracks, setDupTracks } = GetUserContext();
	const [open, setOpen] = useState(false);

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
			//removePlaylistTrack(token, track.track.uri, currPlaylist.id);
		} else {
			//removeSavedTrack(token, track.track.id);
		}
	};

	const getTrackArtists = () => {
		return track.track.artists
			.map((artist) => {
				return artist.name;
			})
			.join(', ');
	};

	return (
		<div className="track">
			<ConfirmDialog
				open={open}
				setOpen={setOpen}
				title={'Confirm Deletion'}
				content={`${getTrackArtists()} \n ${track.track.name}`}
				onConfirm={deleteTrack}
				onCancel={() => setOpen(false)}
			></ConfirmDialog>
			<h1 className="title">{track.track.name}</h1>
			<h1 className="title">{getTrackArtists()}</h1>
			<h1 className="title">{track.track.album.name}</h1>
			<h1 className="title">{getTrackLength(track.track.duration_ms)}</h1>

			<IconButton style={{ padding: '0px' }} onClick={() => setOpen(true)}>
				<ClearIcon style={{ color: '#ffa4a2' }} />
			</IconButton>
		</div>
	);
};

export default Track;
