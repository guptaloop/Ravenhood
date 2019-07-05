import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import App from './app';

const mSP = state => ({
	currentUser: state.session.currentUserId
});

export default withRouter(connect(mSP, null)(App));