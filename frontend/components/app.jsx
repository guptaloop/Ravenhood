import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import SignUpPage from './session/signup_container';
import LoginPage from './session/login_container';
import Dashboard from './dashboard/dashboard_container';
import StockShow from './stocks/stock_show_container';
import Splash from './splash/splash';

const App = props => {
	const RootComponent = props.currentUser ? Dashboard : Splash;
	return (
	<div>
		<Switch>
			<AuthRoute exact path="/signup" component={SignUpPage} />
			<AuthRoute exact path="/login" component={LoginPage} />
			<Route path="/stocks/:symbol" component={StockShow} />
			<Route exact path="/" component={RootComponent} />
			<Redirect to="/" />
		</Switch>
	</div>
	)
};

export default App;

// need to protect Route for StockShow