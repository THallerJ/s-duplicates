import React from 'react';
import '../style/Body.css';
import Header from './Header';
import PlaylistHeader from './PlaylistHeader';
import ReactSpinner from 'react-bootstrap-spinner';

const Body = () => {
	return (
		<div className="body">
			<Header />
			<PlaylistHeader className="playlistHeader" />
			<ReactSpinner type="border" color="primary" size="5" />
		</div>
	);
};

export default Body;
