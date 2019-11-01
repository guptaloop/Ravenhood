import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import SignUpPage from './session/signup_container';
import LoginPage from './session/login_container';
import Dashboard from './dashboard/dashboard_container';
import StockShow from './stock_show/stock_show_container';
import Splash from './splash/splash_container';

const App = props => {
	const RootComponent = props.currentUser ? Dashboard : Splash;
	return (
	<>
		<Switch>
			<AuthRoute exact path="/signup" component={SignUpPage} />
			<AuthRoute exact path="/login" component={LoginPage} />
			<ProtectedRoute exact path="/stocks/:symbol" component={StockShow} />
			<Route exact path="/" component={RootComponent} />
			<Redirect to="/" />
		</Switch>
	</>
	)
};

export default App;

// need to protect Route for StockShow