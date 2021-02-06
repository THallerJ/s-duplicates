const clientId = '531cd6244e3a4221af493a844f8f7a96';

const redirectUri = 'http://localhost:3000';

const scopes = [
	'user-library-modify',
	'user-library-read',
	'playlist-modify-public',
	'playlist-modify-private',
	'playlist-read-private',
];

const showDialog = 'false';

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
