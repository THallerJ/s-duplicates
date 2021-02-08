import React, { useContext, useEffect } from 'react';
import { TokenContext } from '../context/TokenContext';
import Sidebar from './Sidebar';
import Body from './Body';
import '../style/Dashboard.css';
import { getUser } from '../spotify/authentication';

const Dashboard = () => {
	const [token] = useContext(TokenContext);

	useEffect(() => {
		getUser(token).then((resp) => {
			console.log(resp.data.display_name);
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
