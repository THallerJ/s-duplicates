import axios from 'axios';

export const getPlaylists = async (token, userName, offset) => {
	const limit = 50;

	const playlists = await axios
		.get(`https://api.spotify.com/v1/users/${userName}/playlists`, {
			params: {
				offset: offset,
				limit: limit,
			},

			headers: {
				Authorization: 'Bearer ' + token,
			},
		})
		.then(async (response) => {
			if (response.data.next) {
				return response.data.items.concat(
					await getPlaylists(token, userName, offset + limit)
				);
			} else {
				return response.data.items;
			}
		})
		.catch((err) => {
			console.log(err);
		});

	return playlists;
};

export const getPlaylistTracks = async (token, playlistId, offset) => {
	const limit = 100;

	const tracks = await axios
		.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?`, {
			params: {
				offset: offset,
				limit: limit,
			},

			headers: {
				Authorization: 'Bearer ' + token,
			},
		})
		.then(async (response) => {
			if (response.data.next) {
				return response.data.items.concat(
					await getPlaylistTracks(token, playlistId, offset + limit)
				);
			} else {
				return response.data.items;
			}
		})
		.catch((err) => {
			console.log(err);
		});

	return tracks;
};
