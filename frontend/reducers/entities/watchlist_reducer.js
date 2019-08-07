import { RECEIVE_WATCHLIST } from '../../actions/stock_actions';

const watchlistReducer = (state = [], action) => {
	Object.freeze(state);

	switch (action.type) {
		case RECEIVE_WATCHLIST:
			return action.watchlist;
		default:
			return state;
	}
};

export default watchlistReducer;