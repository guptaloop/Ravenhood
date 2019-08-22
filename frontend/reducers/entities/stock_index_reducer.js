import { RECEIVE_ALL_STOCKS } from '../../actions/stock_actions';

const stockIndexReducer = (state = {}, action) => {
	Object.freeze(state);

	switch (action.type) {
		case RECEIVE_ALL_STOCKS:
			return Object.assign({}, state, action.stocks);
		default:
			return state;
	}
};

export default stockIndexReducer;