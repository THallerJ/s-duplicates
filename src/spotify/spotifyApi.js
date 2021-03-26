import axios from 'axios';

const getPaginatedResponse = async (url, token, limit, offset) => {
	const response = await axios
		.get(url, {
			params: {
				offset: offset,
				limit: limit,
			},
			headers: {
				Authorization: 'Bearer ' + token,
			},
		})
		.then(async (resp) => {
			if (resp.data.next) {
				return resp.data.items.concat(
					await getPaginatedResponse(url, token, limit, offset + limit)
				);
			} else {
				return resp.data.items;
			}
		})
		.catch((err) => {
			window.location.reload();
			console.log(err);
		});

	return response;
};

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

export const removePlaylistTrack = async (token, uri, playlistId) => {
	const tracks = [{ uri: uri }];

	const response = await axios
		.delete(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			data: {
				tracks: tracks,
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
