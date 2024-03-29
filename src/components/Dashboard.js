import React, { useEffect, useRef } from "react";
import { GetUserContext } from "../context/AppContext";
import Sidebar from "./Sidebar";
import Body from "./Body";
import "../style/Dashboard.css";
import { getUser } from "../spotify/authentication";
import { getPlaylists } from "../spotify/spotifyApi";

const Dashboard = () => {
	const { token, user, setUser, setPlaylists } = GetUserContext();
	const isInitialMount = useRef(true);

	useEffect(() => {
		getUser(token).then((resp) => {
			setUser(resp.data.display_name);
		});
	}, [token, setUser]);

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			getPlaylists(token, user).then((resp) => {
				setPlaylists(resp);
			});
		}
	}, [user, setPlaylists, token]);

	return (
		<div className="dashboard">
			<Sidebar />
			<Body />
		</div>
	);
};

export default Dashboard;
