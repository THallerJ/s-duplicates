import './App.css';
import React, { useEffect } from 'react';
import Login from './components/Login';
import { getAccessToken } from './spotify/authentication';

function App() {
	useEffect(() => {
		const token = getAccessToken();
		if (token) {
			/* save the token */
		}
	}, []);
	return (
		<div className="App">
			<Login />
		</div>
	);
}

export default App;
