import { getPaginatedResponse } from './paginatedResponse';
const { LinkedQueue } = require('@oresoftware/linked-queue');

export const getPlaylists = async (token, userName, offset) => {
	const limit = 50;
	const url = `https://api.spotify.com/v1/users/${userName}/playlists`;

	return await getPaginatedResponse(url, token, limit, 0);
};

export const getPlaylistTracks = async (token, playlistId, offset) => {
	const limit = 100;
	const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?`;

	return await getPaginatedResponse(url, token, limit, 0);
};

export const getDuplicateTracks = (tracks) => {
	const sortedTracks = tracks.sort((a, b) => {
		return (
			getTrackArtist(a).localeCompare(getTrackArtist(b)) ||
			getTrackTitle(a).localeCompare(getTrackTitle(a))
		);
	});

	const q = new LinkedQueue();

	let dups = [];
	let tempDups = [];

	sortedTracks.forEach((track) => {
		if (q.peek()) {
			if (getTrackKey(track).includes(getTrackKey(q.peek().value))) {
				tempDups.push(q.shift().value);
				tempDups.push(track);
			} else {
				if (tempDups.length > 0) {
					dups.push(tempDups);
					tempDups = [];
				}
				q.shift();
			}
		}

		q.push(track);
	});

	return dups;
};

const getTrackTitle = (track) => {
	return track.track.name;
};

const getTrackArtist = (track) => {
	return track.track.artists[0].name;
};

const getTrackKey = (track) => {
	return getTrackArtist(track) + getTrackTitle(track);
};
