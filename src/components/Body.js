import React, { useState, useEffect } from 'react';
import '../style/Body.css';
import Header from './Header';
import PlaylistHeader from './PlaylistHeader';
import { GetUserContext } from '../context/UserContext';
import ReactSpinner from 'react-bootstrap-spinner';

const Body = () => {
	const [loading, setLoading] = useState(false);
	const { currPlaylist, setCurrPLaylist } = GetUserContext();

	useEffect(() => {
		console.log(currPlaylist);
	}, [currPlaylist]);

	return (
		<div className={`body ${loading ? 'center' : ''}`}>
			{loading ? (
				<ReactSpinner
					className="loadingSpinner"
					type="border"
					color="secondary"
					size="5"
				/>
			) : (
				<div>
					<Header />
					<PlaylistHeader className="playlistHeader" />
				</div>
			)}
		</div>
	);
};

export default Body;
