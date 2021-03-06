import React from 'react';
import '../style/Track.css';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Track = ({ track }) => {
	const getTrackLength = (ms) => {
		const min = Math.floor((ms / 1000 / 60) << 0);
		const sec = Math.floor((ms / 1000) % 60);
		return min + ':' + sec;
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
				onClick={console.log('delete clicked')}
			>
				<DeleteIcon style={{ color: '#ef5350' }} />
			</IconButton>
		</div>
	);
};

export default Track;
