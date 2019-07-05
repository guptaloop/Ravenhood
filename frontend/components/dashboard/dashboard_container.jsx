import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './dashboard';


const mSP = (state) => ({
	currentUser: state.session.currentUserId
});

const mDP = dispatch => ({
	logout: () => dispatch(logout())
});

export default withRouter(connect(mSP, mDP)(Dashboard));