import React from 'react';
import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/session_actions';
import SignUpForm from './signup';


const mSP = ({ errors }) => ({
	formType: 'signup',
	errors: errors.sessionErrors
});


const mDP = dispatch => ({
	signup: user => dispatch(signup(user)),
	receiveErrors: errors => dispatch(receiveErrors(errors))
});


export default connect(mSP, mDP)(SignUpForm);