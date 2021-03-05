import React from 'react';
import '../style/Track.css';

const Track = ({ track }) => {
	return (
		// make sure to include all artists
		<div className="track">
			<h1 className="title">{track.track.name}</h1>
			<h1 className="title">{track.track.artists[0].name}</h1>
			<h1 className="title">{track.track.album.name}</h1>
			<h1 className="title">{track.track.duration_ms}</h1>
			<h1 className="title">D</h1>
		</div>
	);
};

export default Track;
