import React from 'react';
import '../style/PlaylistHeader.css';

const PlaylistHeader = ({ title, songCount, imgSrc }) => {
	return (
		<div className="playlistHeader">
			{imgSrc ? <img className="playlistImg" src={imgSrc} alt="" /> : 'hello'}
			<div className="playlistHeaderItems">
				<h1 className="playlistTitle">{title}</h1>
				<h4 className="songCount">{songCount}</h4>
			</div>
		</div>
	);
};

export default PlaylistHeader;
