import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { GetUserContext } from '../context/UserContext';
import { getAccessToken } from '../spotify/authentication';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const [doRender, setDoRender] = useState(false);
	const { token, setToken } = GetUserContext();

	useEffect(() => {
		if (!token) {
			const token = getAccessToken();
			setToken(token);
			setDoRender(true);
		}
	}, []);

	return (
		<Route
			{...rest}
			render={(props) => {
				if (doRender) {
					return token ? <Component {...props} /> : <Redirect to="/login" />;
				}
			}}
		></Route>
	);
};

export default PrivateRoute;
