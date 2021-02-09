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
