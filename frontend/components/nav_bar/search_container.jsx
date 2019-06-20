import React from 'react';
import { connect } from 'react-redux';
import Search from './search';

const mSP = state => ({
	currentUserId: state.session.currentUserId,
	currentUsers: state.entities.users
});

const mDP = dispatch => ({

});

export default connect(mSP, mDP)(Search);