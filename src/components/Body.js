import React, { useState } from 'react';
import '../style/Body.css';
import Header from './Header';
import PlaylistHeader from './PlaylistHeader';
import ReactSpinner from 'react-bootstrap-spinner';

const Body = () => {
	const [loading, setLoading] = useState(true);

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
