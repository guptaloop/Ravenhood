import { connect } from 'react-redux';
import Dashboard from './dashboard';


const mSP = (state) => ({
	currentUser: state.session.currentUser,
	// stock: Object.values(state.entities.stocks)
});

const mDP = dispatch => ({

});

export default connect(mSP, mDP)(Dashboard);