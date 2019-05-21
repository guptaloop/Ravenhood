import { RECEIVE_STOCK } from '../actions/stock_actions';

const stocksReducer = (state = {}, action) => {
	Object.freeze(state);

	switch(action.type) {
		case RECEIVE_STOCK:
			// only want one stock in the state at a time for this action 
			return Object.assign({}, {[action.stock.id]: action.stock});
		default:
			return state;
	}
};

export default stocksReducer;