import {
	RECEIVE_HOLDINGS, RECEIVE_HOLDING_ERRORS
} from '../../actions/holding_actions';

const holdingErrorsReducer = (state = [], action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_HOLDING_ERRORS:
			return action.errors;
		case RECEIVE_HOLDINGS:
			return [];
		default:
			return state;
	}
};

export default holdingErrorsReducer;