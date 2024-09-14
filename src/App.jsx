import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import { AppContextProvider } from './context/AppContext';

function App() {
	return (
		<div className="App">
			<AppContextProvider>
				<Router>
					<Route path="/login" component={Login} />
					<PrivateRoute exact path="/" component={Dashboard} />
				</Router>
			</AppContextProvider>
		</div>
	);
}

export default App;
