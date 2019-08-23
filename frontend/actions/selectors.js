export const sumPortfolioValue = holdings => {
	let portfolioValue = 0;
	holdings.forEach(holding => portfolioValue += holding.shares * holding.price);
	return portfolioValue;
};

export const searchStocks = (state, query) => {
	query = query.toLowerCase();
	let res = [];
	let formattedIndex = formatIndex(state.entities.stockIndex);
	const stocks = Object.keys(formattedIndex).sort();

	if (query.length < 5) {
		res = res.concat(search(5 - res.length, stocks, formattedIndex, stock => stock.symbol.toLowerCase().startsWith(query)));
		if (res.length === 5) return res;
	}
	
	let results = res.concat(search(5 - res.length, stocks, formattedIndex, stock => stock.name.toLowerCase().includes(query)));

	return results;
};

const search = (limit, stocks, formattedIndex, cb) => {
	const res = [];
	
	for (let i = 0; i < stocks.length; i++) {
		const stock = formattedIndex[stocks[i]];
		if (cb(stock)) {	res.push(stock);	}
		if (res.length === limit) {	return res;	}
	}

	return res;
};

const formatIndex = (index) => {
	const formattedIndex = {};
	let count = Object.keys(index);
	for (let i = 0; i < count.length; i++) {
		const stockObj = index[i];
		formattedIndex[stockObj.symbol] = stockObj;
	}
	return formattedIndex;
};