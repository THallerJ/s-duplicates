import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';

function App() {
	return (
		<div className="App">
			<UserProvider>
				<Router>
					<Route path="/login" component={Login} />
					<PrivateRoute exact path="/" component={Dashboard} />
				</Router>
			</UserProvider>
		</div>
	);
}

export default App;
