import axios from 'axios';

export const getSavedTracks = async (token, offset) => {
	const limit = 50;

	const tracks = await axios
		.get(`https://api.spotify.com/v1/me/tracks`, {
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
					await getSavedTracks(token, offset + limit)
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
