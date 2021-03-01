import { getPaginatedResponse } from './paginatedResponse';

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
			a.track.artists[0].name.localeCompare(b.track.artists[0].name) ||
			a.track.name.localeCompare(b.track.name)
		);
	});

	sortedTracks.forEach((song) => {
		console.log(song.track.artists[0].name + song.track.name);
	});

	return sortedTracks;
};
