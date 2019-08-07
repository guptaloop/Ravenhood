import * as StockApiUtil from '../util/stock_api_util';

export const RECEIVE_STOCK = "RECEIVE_STOCK";
// export const RECEIVE_STOCKS = "RECEIVE_STOCKS";
export const RECEIVE_NEWS_VIDEOS = "RECEIVE_NEWS_VIDEOS";
export const RECEIVE_WATCHLIST = "RECEIVE_WATCHLIST";

export const receiveStock = stock => ({
	type: RECEIVE_STOCK,
	stock
});

export const receiveNewsVideos = videos => ({
	type: RECEIVE_NEWS_VIDEOS,
	videos
});

export const receiveWatchlist = watchlist => ({
	type: RECEIVE_WATCHLIST,
	watchlist
});

export const fetchStock = symbol => dispatch => (
	StockApiUtil.fetchStock(symbol).then(
		stock => dispatch(receiveStock(stock)))
);

export const fetchNewsVideos = query => dispatch => (
	StockApiUtil.fetchNewsVideos(query).then(
		videos => dispatch(receiveNewsVideos(videos)))
);

export const fetchWatchlist = (user_id) => dispatch => (
	StockApiUtil.fetchWatchlist(user_id).then(
	watchlist => dispatch(receiveWatchlist(watchlist)))
);