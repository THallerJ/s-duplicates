import { getPaginatedResponse } from './paginatedResponse';
import axios from 'axios';

export const getSavedTracks = async (token, offset) => {
	const limit = 50;
	const url = `https://api.spotify.com/v1/me/tracks`;

	return await getPaginatedResponse(url, token, limit, 0);
};

export const removeSavedTrack = async (token, id) => {
	const response = await axios
		.delete('https://api.spotify.com/v1/me/tracks', {
			params: {
				ids: id,
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then(async (resp) => {
			return resp;
		})
		.catch((err) => {
			console.log(err);
		});

	return response;
};

export const removePlaylistTrack = async (token, trackId, playlistId) => {
	const tracks = [{ uri: trackId }];
	const response = await axios
		.delete('https://api.spotify.com/v1/me/tracks', {
			params: { tracks: tracks },
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
		.then(async (resp) => {
			return resp;
		})
		.catch((err) => {
			console.log(err);
		});

	return response;
};
