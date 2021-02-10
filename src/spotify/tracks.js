import axios from 'axios';

export const getSavedTracks = async (token) => {
	const user = await axios
		.get(`https://api.spotify.com/v1/me/tracks`, {
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
