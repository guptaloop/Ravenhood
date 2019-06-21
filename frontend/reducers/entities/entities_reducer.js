import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import stocksReducer from './stocks_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
	users: usersReducer,
	stocks: stocksReducer,
	search: searchReducer
});

export default entitiesReducer;