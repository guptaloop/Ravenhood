import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import StockOrderForm from './stock_order_form';
import { fetchWatchlist, removeFromWatchlist, addToWatchlist }
	from '../../actions/stock_actions';
import { fetchHoldings, createHolding, updateHolding, destroyHolding } from '../../actions/holding_actions';
import { updateGold } from '../../actions/session_actions';


const mSP = (state) => ({
	currentUser: state.session.currentUserId,
	watchlist: state.entities.watchlist,
	holdings: state.entities.holdings,
	errors: state.errors.sessionErrors,
});

const mDP = dispatch => ({
	addToWatchlist: (userId, symbol) => dispatch(
		addToWatchlist(userId, symbol)),
	
	removeFromWatchlist: (watchlistId, userId) => dispatch(
		removeFromWatchlist(watchlistId, userId)),

	fetchHoldings: userId => dispatch(fetchHoldings(userId)),

	buyStock: (userId, symbol, shares, price) => dispatch(
		createHolding(userId, symbol, shares, price)),

	updateHolding: (holding_id, userId, shares) => dispatch(
		updateHolding(holding_id, userId, shares)),

	destroyHolding: (holding_id, userId) => dispatch(
		destroyHolding(holding_id, userId)),

	updateGold: (user_id, gold) => dispatch(updateGold(user_id, gold)),

	fetchWatchlist: userId => dispatch(fetchWatchlist(userId)),
});

export default withRouter(connect(mSP, mDP)(StockOrderForm));