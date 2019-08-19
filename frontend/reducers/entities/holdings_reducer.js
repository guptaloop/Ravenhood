import { RECEIVE_HOLDINGS } from '../../actions/holding_actions';

const holdingsReducer = (state = {}, action) => {
	Object.freeze(state);

	switch (action.type) {
		case RECEIVE_HOLDINGS:
			return action.holdings;
		default:
			return state;
	}
};

export default holdingsReducer;