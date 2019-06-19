import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';


const mSP = state => ({
	loggedIn: Boolean(state.session.currentUserId)
});

const Auth = ({ component: Component, path, loggedIn, exact }) => {
	return(
	
	<Route path={path} exact={exact} render={(props) => (
		loggedIn ? <Redirect to="/stocks/LION" /> : <Component {...props} />
	)}
	/>
)};

const Protected = ({ loggedIn, path, component: Component }) => (
	<Route path={path} render={ props => (
			loggedIn ? <Component {...props} /> : <Redirect to="/login" />
		)}
	/>
);

export const AuthRoute = withRouter(connect(mSP, null)(Auth));
export const ProtectedRoute = withRouter(connect(mSP, null)(Protected));