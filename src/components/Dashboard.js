import React, { useContext } from 'react';
import { TokenContext } from '../context/TokenContext';
import Sidebar from './Sidebar';
import Body from './Body';
import '../style/Dashboard.css';

const Dashboard = () => {
	const [token] = useContext(TokenContext);

	return (
		<div className="dashboard">
			<Sidebar />
			<Body />
		</div>
	);
};

export default Dashboard;
