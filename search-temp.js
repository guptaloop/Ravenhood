export const searchStocks = (state, query) => {
	query = query.toLowerCase();
	let res = [];
	const stocks = Object.keys(state.entities.search).sort();
	// []
	//
	//
	if (query.length < 5) {
		res = res.concat(search(5 - res.length, stocks, state, stock => stock.symbol.toLowerCase().startsWith(query)));
		if (res.length === 5) return res;
	}
	return res.concat(search(5 - res.length, stocks, state, stock => stock.name.toLowerCase().includes(query)));
};

const search = (limit, stocks, state, cb) => {
	const res = [];
	for (let i = 0; i < stocks.length; i++) {
		const stock = state.entities.search[stocks[i]];
		if (cb(stock)) {
			res.push(stock);
		}
		if (res.length === limit) {
			return res;
		}
	}
	return res;
};