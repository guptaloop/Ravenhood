import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import holdingErrorsReducer from './holding_errors_reducer';

const errorsReducer = combineReducers({
	sessionErrors: sessionErrorsReducer,
	holdingErrors: holdingErrorsReducer,
});

export default errorsReducer;