import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { TokenContext } from '../context/TokenContext';
import { getAccessToken } from '../spotify/authentication';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const [doRender, setDoRender] = useState(false);
	const [user, setUser] = useContext(TokenContext);
	useEffect(() => {
		if (!user) {
			const token = getAccessToken();
			setUser(token);
			setDoRender(true);
		}
	}, []);

	return (
		<Route
			{...rest}
			render={(props) => {
				if (doRender) {
					return user ? <Component {...props} /> : <Redirect to="/login" />;
				}
			}}
		></Route>
	);
};

export default PrivateRoute;
