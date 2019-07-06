import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

import { logout } from '../../actions/session_actions';


const mSP = state => ({
	currentUserId: state.session.currentUserId,
	// currentUsers: state.entities.users
});

const mDP = dispatch => ({
	logout: () => dispatch(logout())
});

export default withRouter(connect(mSP, mDP)(NavBar));