import { RECEIVE_STOCK } from "../../actions/stock_actions";

const searchReducer = (state = {}, action) => {
	Object.freeze(state);
	
	switch (action.type) {
		case RECEIVE_STOCK:
			return Object.assign({}, state, {currentStockId: action.stock.id});
		default:
			return state;
	}
};

export default searchReducer;