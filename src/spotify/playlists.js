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
		if (getTrackArtist(a) > getTrackArtist(b)) return 1;
		if (getTrackArtist(a) < getTrackArtist(b)) return -1;

		if (getTrackTitle(a) > getTrackTitle(b)) return 1;
		if (getTrackTitle(a) < getTrackTitle(b)) return -1;
	});

	const q = new LinkedQueue();

	sortedTracks.forEach((song) => {
		console.log(getTrackKey(song));
	});
	let dups = [];
	let tempDups = [];

	sortedTracks.forEach((track) => {
		if (q.peek()) {
			const currKey = getTrackKey(track);
			const qKey = getTrackKey(q.peek().value);

			if (currKey.includes(qKey) || qKey.includes(currKey)) {
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

	console.log(dups);
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
