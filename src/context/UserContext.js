import React, { useContext, useState } from 'react';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
	const [token, setToken] = useState();
	const [user, setUser] = useState();
	const [playlists, setPlaylists] = useState();

	const value = {
		token,
		setToken,
		user,
		setUser,
		playlists,
		setPlaylists,
	};

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const GetUserContext = () => useContext(UserContext);