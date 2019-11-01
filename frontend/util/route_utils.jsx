import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';


const mSP = state => ({ loggedIn: Boolean(state.session.currentUserId) });

const Auth = ({ component: Component, path, loggedIn, exact }) => (
	<Route path={path} exact={exact} render={(props) => (
		!loggedIn ? <Component {...props} /> : <Redirect to="/" />
	)}/>
);

const Protected = ({ component: Component, loggedIn, path, exact }) => (
	<Route path={path} exact={exact} render={(props) => (
		loggedIn ? <Component {...props} /> : <Redirect to="/" />
	)} />
);

export const AuthRoute = withRouter(connect(mSP, null)(Auth));
export const ProtectedRoute = withRouter(connect(mSP, null)(Protected));
