import { searchStock } from "../util/search_api_util";

export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

export const receiveSearch = symbol => ({
	type: RECEIVE_SEARCH,
	symbol
});

export const search = symbol => dispatch => (
	searchStock(symbol).then(symbol => (dispatch(receiveSearch(symbol))))
);