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

	/*sortedTracks.forEach((song) => {
		console.log(song.track.artists[0].name + song.track.name);
	}); */

	const q = new LinkedQueue();

	sortedTracks.forEach((track) => {
		if (q.peek() != null) {
			console.log(q.peek());
			console.log('here');
			if (getTrackKey(track).includes(getTrackKey(q.peek()))) {
				// do stuff when we find duplicate
			} else {
				q.deq();
			}
		}

		q.push(track);
	});

	// iterate through sorted tracks, adding each track to a queue
	// compare current track with track on top of queue
	// if current track does not contain track at top of queue, pop off queue
	// otherwise keep an array of arrays that corresponds to duplicates. Add current song and duplicate onto array

	return sortedTracks;
};

const getTrackTitle = (track) => {
	return track.track.artists[0].name;
};

const getTrackArtist = (track) => {
	return track.track.artists[0].name;
};

const getTrackKey = (track) => {
	return getTrackArtist(track) + getTrackTitle(track);
};
