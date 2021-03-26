import React from 'react';
import '../style/Body.css';
import { GetUserContext } from '../context/AppContext';
import ReactSpinner from 'react-bootstrap-spinner';
import { getSavedTracks, getPlaylistTracks } from '../spotify/spotifyApi';
import { getDuplicateTracks } from '../spotify/duplicateTracks';
import DupTrackGroup from './DupTrackGroup';
import TracksHeader from './TracksHeader';

const Body = () => {
	const {
		currPlaylist,
		token,
		dupTracks,
		setDupTracks,
		loading,
		setLoading,
	} = GetUserContext();

	const onClick = () => {
		setLoading(true);

		if (currPlaylist) {
			getPlaylistTracks(token, currPlaylist.id).then((resp) => {
				const dups = getDuplicateTracks(resp);
				setDupTracks(dups);
				console.log(dups);
				setLoading(false);
			});
		} else {
			getSavedTracks(token).then((resp) => {
				const dups = getDuplicateTracks(resp);
				setDupTracks(dups);
				console.log(dups);
				setLoading(false);
			});
		}
	};

	const DuplicateResults = () => {
		// if the user has searched for duplicate tracks
		if (dupTracks) {
			// no duplicate tracks were found
			if (dupTracks.length === 0) {
				return (
					<h1 className="center" style={{ color: '#1db954' }}>
						No duplicates found
					</h1>
				);
				// duplicate tracks were found
			} else {
				return (
					<div className="duplicateTracks">
						<TracksHeader />
						{dupTracks.map((tracks) => {
							if (tracks.length > 1) {
								return (
									<DupTrackGroup key={tracks[0].track.id} tracks={tracks} />
								);
							}
						})}
					</div>
				);
			}
			// if the user has not yet searched for duplicate tracks
		} else {
			return (
				<button className="button center" onClick={onClick}>
					Find Duplicates
				</button>
			);
		}
	};

	return (
		<div className="body">
			{loading ? (
				<div className="center">
					<ReactSpinner
						className="center"
						type="border"
						color="secondary"
						size="5"
					/>
				</div>
			) : (
				<DuplicateResults />
			)}
		</div>
	);
};

export default Body;
