import './App.css';
import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import { TokenProvider } from './context/TokenContext';

function App() {
	return (
		<div className="App">
			<TokenProvider>
				<Router>
					<Route path="/login" component={Login} />
					<PrivateRoute exact path="/" component={Dashboard} />
				</Router>
			</TokenProvider>
		</div>
	);
}

export default App;
