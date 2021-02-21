import React, { useState, useEffect } from 'react';
import '../style/Body.css';
import Header from './Header';
import PlaylistHeader from './PlaylistHeader';
import { GetUserContext } from '../context/UserContext';
import ReactSpinner from 'react-bootstrap-spinner';

const Body = () => {
	const [loading, setLoading] = useState(false);
	const { currPlaylist } = GetUserContext();

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
					{currPlaylist == null ? (
						<PlaylistHeader className="playlistHeader" title="Library" />
					) : (
						<PlaylistHeader
							className="playlistHeader"
							title={currPlaylist.name}
							songCount={currPlaylist.tracks.total + ' songs'}
							imgSrc={currPlaylist.images[0].url}
						/>
					)}

					<div className="center">
						<button className="button center">Find Duplicates</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Body;
