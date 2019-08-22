export const sumPortfolioValue = holdings => {
	let portfolioValue = 0;
	holdings.forEach(holding => portfolioValue += holding.shares * holding.price);
	return portfolioValue;
};

export const searchStocks = (state, query) => {
	query = query.toLowerCase();
	let res = [];
	const stocks = Object.values(state.entities.stockIndex).map(
		stock => stock.symbol).sort();
	console.log(stocks);
	if (query.length < 5) {
		res = res.concat(search(5 - res.length, stocks, state, stock => stock.symbol.toLowerCase().startsWith(query)));
		if (res.length === 5) return res;
	}
	
	return res.concat(search(5 - res.length, stocks, state, stock => stock.name.toLowerCase().includes(query)));
};

const search = (limit, stocks, state, cb) => {
	const res = [];
	
	for (let i = 0; i < stocks.length; i++) {
		const stock = state.entities.stockIndex[stocks[i]];
		if (cb(stock)) {	res.push(stock);	}
		if (res.length === limit) {	return res;	}
	}

	return res;
};