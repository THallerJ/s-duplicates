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
