import { getPaginatedResponse } from './paginatedResponse';

export const getSavedTracks = async (token, offset) => {
	const limit = 50;
	const url = `https://api.spotify.com/v1/me/tracks`;

	return await getPaginatedResponse(url, token, limit, 0);
};
