import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Splash from './splash';
import { login } from '../../actions/session_actions';


const mSP = state => ({
	currentUserId: state.session.currentUserId,
	// currentUsers: state.entities.users
});

const mDP = dispatch => ({
	login: user => dispatch(login(user))
});

export default withRouter(connect(mSP, mDP)(Splash));