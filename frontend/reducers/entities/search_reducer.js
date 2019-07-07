import { RECEIVE_STOCK } from "../../actions/stock_actions";

const _nullStockId = Object.freeze({ id: null });

const searchReducer = (state = _nullStockId, action) => {
	Object.freeze(state);
	
	switch (action.type) {
		case RECEIVE_STOCK:
			return action.stock.id;
		default:
			return state;
	}
};

export default searchReducer;