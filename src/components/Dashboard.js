import React, { useEffect } from 'react';
import { GetUserContext } from '../context/UserContext';
import Sidebar from './Sidebar';
import Body from './Body';
import '../style/Dashboard.css';
import { getUser } from '../spotify/authentication';

const Dashboard = () => {
	const { token, setUser } = GetUserContext();

	useEffect(() => {
		getUser(token).then((resp) => {
			setUser(resp.data.display_name);
		});
	}, []);
	return (
		<div className="dashboard">
			<Sidebar />
			<Body />
		</div>
	);
};

export default Dashboard;
