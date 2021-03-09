import React from 'react';
import Track from './Track';
import '../style/DupTrackGroup.css';

export const DupTrackGroup = ({ tracks }) => {
	return (
		<div className="duplicates">
			{tracks.map((song) => {
				return <Track key={song.id} track={song} />;
			})}
		</div>
	);
};

export default DupTrackGroup;
