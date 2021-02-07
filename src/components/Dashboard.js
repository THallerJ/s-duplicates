import React, { useContext } from 'react';
import { TokenContext } from '../context/TokenContext';

const Home = () => {
	const [user, setUser] = useContext(TokenContext);

	return (
		<div>
			<p>{user}</p>
		</div>
	);
};

export default Home;
