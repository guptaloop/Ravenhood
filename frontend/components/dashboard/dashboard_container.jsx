import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchWatchlist } from '../../actions/stock_actions';
import { fetchHoldings } from '../../actions/holding_actions';

const mSP = (state) => ({
	currentUser: state.session.currentUserId,
	watchlist: state.entities.watchlist,
	holdings: state.entities.holdings,

});

const mDP = dispatch => ({
	fetchWatchlist: user_id => dispatch(fetchWatchlist(user_id)),
	fetchHoldings: userId => dispatch(fetchHoldings(userId)),

});

export default withRouter(connect(mSP, mDP)(Dashboard));