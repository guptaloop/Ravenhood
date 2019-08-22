import { RECEIVE_STOCK, RECEIVE_ALL_STOCKS } from '../../actions/stock_actions';

const stocksReducer = (state = {}, action) => {
	Object.freeze(state);

	switch (action.type) {
		case RECEIVE_STOCK:
			return Object.assign({}, state, { [action.stock.id]: action.stock} );
		case RECEIVE_ALL_STOCKS:
			return Object.assign({}, state, action.stocks);
		default:
			return state;
	}
};

export default stocksReducer;