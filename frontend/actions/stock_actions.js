import * as StockApiUtil from '../util/stock_api_util';

export const RECEIVE_STOCK = "RECEIVE_STOCK";
export const RECEIVE_STOCKS = "RECEIVE_STOCKS";

export const receiveStock = stock => ({
	type: RECEIVE_STOCK,
	stock
});

export const fetchStock = symbol => dispatch => (
	StockApiUtil.fetchStock(symbol).then(stock => dispatch(receiveStock(stock)))
);