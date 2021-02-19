import React from 'react';
import '../style/Body.css';
import Header from './Header';
import PlaylistHeader from './PlaylistHeader';

const Body = () => {
	return (
		<div className="body">
			<Header />
			<PlaylistHeader className="playlistHeader" />
		</div>
	);
};

export default Body;
