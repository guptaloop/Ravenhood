import * as StockApiUtil from '../util/stock_api_util';

export const RECEIVE_STOCK = "RECEIVE_STOCK";
// export const RECEIVE_STOCKS = "RECEIVE_STOCKS";
export const RECEIVE_PRICES = "RECEIVE_PRICES";

export const receiveStock = stock => ({
	type: RECEIVE_STOCK,
	stock
});

export const receivePrices = prices => ({
	type: RECEIVE_PRICES,
	prices
});

export const fetchStock = symbol => dispatch => (
	StockApiUtil.fetchStock(symbol).then(
		stock => dispatch(receiveStock(stock)))
);

export const storePrices = period => dispatch => (
	dispatch(receivePrices(genPrices(period)))
);

// custom method to generate random prices for stockShow page
const genPrices = period => {
	let year = 298;
	const range = period;
	let prices = [];

	while (period > 0) {
		let priceObj = {
			date: year,
			price: (((Math.random() + 0.005) * 1000)).toFixed(2)
		};

		prices.unshift(priceObj);

		if (range === 10) {
			period -= 1;
			year -= 1;
		} else if (range === 50) {
			period -= 4;
			year -= 4;
		} else if (range === 250) {
			period -= 20;
			year -= 20;
		} else if (range === 1000) {
			period -= 80;
			year -= 80;
		} else if (range === 10000) {
			period -= 750;
			year -= 750;
		}
	}
	return prices;
};