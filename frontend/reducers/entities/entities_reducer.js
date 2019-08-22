import { combineReducers } from 'redux';
import currentUserReducer from './users_reducer';
import stocksReducer from './stocks_reducer';
import searchReducer from './search_reducer';
import newsVideosReducer from './news_videos_reducer';
import watchlistReducer from './watchlist_reducer';
import holdingsReducer from './holdings_reducer';
import stockIndexReducer from './stock_index_reducer';

const entitiesReducer = combineReducers({
	currentUser: currentUserReducer,
	stocks: stocksReducer,
	search: searchReducer,
	newsVideos: newsVideosReducer,
	watchlist: watchlistReducer,
	holdings: holdingsReducer,
	stockIndex: stockIndexReducer,
	
});

export default entitiesReducer;