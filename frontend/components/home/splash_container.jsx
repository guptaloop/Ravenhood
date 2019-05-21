import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Splash from './splash';

const mSP = state => ({
	currentUser: state.session.currentUser
});

const mDP = dispatch => ({
	logout: () => dispatch(logout())
});

export default connect(mSP, mDP)(Splash);