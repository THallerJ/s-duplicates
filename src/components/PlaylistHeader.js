import React from 'react';
import '../style/PlaylistHeader.css';

const PlaylistHeader = () => {
	return (
		<div className="playlistHeader">
			<img
				className="playlistImg"
				src="https://i.scdn.co/image/ab67616d00001e02f337a21d945f44e802a1eb1d"
				alt=""
			/>
			<div className="playlistHeaderItems">
				<h1 className="playlistTitle">Playlist Title</h1>
				<h4 className="songCount">150 songs</h4>
			</div>
		</div>
	);
};

export default PlaylistHeader;
