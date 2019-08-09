import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import StockOrderForm from './stock_order_form';
import { fetchWatchlist, removeFromWatchlist, addToWatchlist }
	from '../../actions/stock_actions';


const mSP = ({ entities }) => ({
	watchlist: entities.watchlist,
	userId: entities.currentUser,
});

const mDP = dispatch => ({
	addToWatchlist: (userId, symbol) => dispatch(
		addToWatchlist(userId, symbol)),
	removeFromWatchlist: (watchlistId, userId) => dispatch(
		removeFromWatchlist(watchlistId, userId)),
	fetchWatchlist: userId => dispatch(fetchWatchlist(userId)),
});

export default withRouter(connect(mSP, mDP)(StockOrderForm));