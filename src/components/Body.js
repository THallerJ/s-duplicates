import React, { useState, useEffect } from 'react';
import '../style/Body.css';
import Header from './Header';
import PlaylistHeader from './PlaylistHeader';
import { GetUserContext } from '../context/UserContext';
import ReactSpinner from 'react-bootstrap-spinner';
import { getPlaylistTracks } from '../spotify/playlists';
import { getSavedTracks } from '../spotify/tracks';

const Body = () => {
	const [loading, setLoading] = useState(false);
	const { currPlaylist, user, token } = GetUserContext();

	const onClick = () => {
		setLoading(true);

		if (currPlaylist) {
			getPlaylistTracks(token, currPlaylist.id).then((resp) => {
				console.log(resp);
				setLoading(false);
			});
		} else {
			getSavedTracks(token).then((resp) => {
				console.log(resp);
				setLoading(false);
			});
		}
	};

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
					<Header username={user ? user : ''} />
					{currPlaylist == null ? (
						<PlaylistHeader
							className="playlistHeader"
							title="Library"
							songCount=" "
						/>
					) : (
						<PlaylistHeader
							className="playlistHeader"
							title={currPlaylist.name}
							songCount={currPlaylist.tracks.total + ' songs'}
							imgSrc={currPlaylist.images[0].url}
						/>
					)}

					<div className="center">
						<button className="button" onClick={onClick}>
							Find Duplicates
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Body;
