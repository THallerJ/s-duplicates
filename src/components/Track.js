import React from 'react';
import '../style/Track.css';

const Track = ({ track }) => {
	return (
		<div className="track">
			<h1 className="title">{track.track.name}</h1>
			<h1 className="title">artist</h1>
			<h1 className="title">album</h1>
			<h1 className="title">14:02</h1>
			<h1 className="title">D</h1>
		</div>
	);
};

export default Track;
