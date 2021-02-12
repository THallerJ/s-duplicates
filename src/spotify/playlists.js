import axios from 'axios';

export const getPlaylists = async (token, userName) => {
	const user = await axios
		.get(`https://api.spotify.com/v1/users/${userName}/playlists`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		})
		.then((response) => {
			return response;
		})
		.catch((err) => {
			console.log(err);
		});

	return user;
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
