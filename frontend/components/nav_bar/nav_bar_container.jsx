import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { login, logout } from '../../actions/session_actions';


const mSP = state => ({
	currentUserId: state.session.currentUserId,
});

const mDP = dispatch => ({
	login: user => dispatch(login(user)),
	logout: () => dispatch(logout())
});

export default withRouter(connect(mSP, mDP)(NavBar));