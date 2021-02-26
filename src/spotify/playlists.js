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
	var result = Object.values(
		tracks.reduce((c, v) => {
			let key = v.track.name;
			c[key] = c[key] || [];
			c[key].push(v);
			return c;
		}, [])
	).reduce((c, v) => (v.length > 1 ? c.concat(v) : c), []);
	console.log(result);

	return result;
};
