import React from 'react';
import '../style/Login.css';
import SpotifyLogo from '../images/spotify_green_logo.png';
import { authUrl } from '../spotify/authentication';

const Login = () => {
	return (
		<div className="login">
			<div className="loginElements">
				<img className="spotifyLoginLogo" src={SpotifyLogo} alt="" />
				<p>Quickly remove duplicate songs from your library</p>
				<a href={authUrl}>Login to Spotify</a>
			</div>
		</div>
	);
};

export default Login;
