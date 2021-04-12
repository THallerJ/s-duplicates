import axios from 'axios';

const clientId = process.env.REACT_APP_CLIENT_ID;

const redirectUri = process.env.REACT_APP_REDIRECT_URI;

const scopes = [
	'user-library-modify',
	'user-library-read',
	'playlist-modify-public',
	'playlist-modify-private',
	'playlist-read-private',
];

const showDialog = 'true';

export const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	' '
)}&response_type=token&show_dialog=${showDialog}`;

export const getAccessToken = () => {
	if (window.location.hash) {
		const token = window.location.hash.split('=')[1].split('&')[0];
		window.location.hash = '';
		return token;
	}
};

export const getUser = async (token) => {
	const user = await axios
		.get('https://api.spotify.com/v1/me', {
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
