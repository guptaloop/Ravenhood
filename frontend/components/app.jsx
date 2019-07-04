import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import SplashContainer from './home/splash_container';
import DashboardContainer from './dashboard/dashboard_container';
import StockShowContainer from './stocks/stock_show_container';

const App = () => (
	<div>
		<Switch>
			<AuthRoute exact path="/signup" component={SignUpContainer} />
			<AuthRoute exact path="/login" component={LogInContainer} />
			<ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
			<ProtectedRoute exact path="/stocks/:symbol" component={StockShowContainer} />
			<Route exact path="/" component={SplashContainer} />
			<Redirect to="/" />
		</Switch>
	</div>
);

export default App;