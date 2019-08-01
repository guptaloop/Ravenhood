import { RECEIVE_NEWS_VIDEOS } from '../../actions/stock_actions';

const newsVideosReducer = (state = [], action) => {
	Object.freeze(state);

	switch (action.type) {
		case RECEIVE_NEWS_VIDEOS:
			return action.videos.items;
		default:
			return state;
	}
};

export default newsVideosReducer;