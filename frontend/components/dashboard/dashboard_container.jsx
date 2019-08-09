import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchWatchlist } from '../../actions/stock_actions';


const mSP = (state) => ({
	currentUser: state.session.currentUserId,
	watchlist: state.entities.watchlist,
});

const mDP = dispatch => ({
	fetchWatchlist: user_id => dispatch(fetchWatchlist(user_id)),
});

export default withRouter(connect(mSP, mDP)(Dashboard));