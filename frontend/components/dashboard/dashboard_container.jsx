import { connect } from 'react-redux';
import Dashboard from './dashboard';


const mSP = (state) => ({
	currentUser: state.session.currentUser
});

const mDP = dispatch => ({
	logout: () => dispatch(logout())
});

export default connect(mSP, mDP)(Dashboard);