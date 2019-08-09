// create ajax requests for pulling stock (company) data from the backend

export const fetchStock = symbol => (
	$.ajax({
		url: `/api/stocks/${symbol}`,
		method: 'GET',
		data: { symbol }
	})
);

export const fetchNewsVideos = (query) => (
	$.ajax({
		url: `https://www.googleapis.com/youtube/v3/search?
		part=snippet&type=video&maxResults=5&q=${query}&safeSearch=strict&
		key=${window.youtubeAPIkey}`,
		method: 'GET',
	})
);

export const fetchWatchlist = (user_id) => (
	$.ajax ({
		url: `/api/stock_watches/${user_id}`,
		method: 'GET'
	})
);

export const addToWatchlist = (user_id, symbol) => (
	$.ajax ({
		url: `/api/stock_watches?user_id=${user_id}&symbol=${symbol}`,
		method: 'POST',
	})
);

export const removeFromWatchlist = (watchlist_id, user_id) => (
	$.ajax ({
		url: `/api/stock_watches/${watchlist_id}?user_id=${user_id}`,
		method: 'DELETE',
	})
);

export const fetchHoldings = (user_id) => (
	$.ajax ({
		url: `/api/holdings/${user_id}`,
		method: 'GET',
	})
);

export const updateHolding = (holding_id, user_id, shares) => (
	$.ajax ({
		url: `/api/holdings/${holding_id}?user_id=${user_id}&shares=${shares}`,
		method: 'PATCH',
	})
);

export const createHolding = (user_id, symbol, shares, price) => (
	$.ajax ({
		url: `/api/holdings?user_id=${user_id}&symbol=${symbol}&shares=${shares}&price=${price}`,
		method: 'POST',
	})
);

export const destroyHolding = (holding_id, user_id) => (
	$.ajax ({
		url: `/api/holdings/${holding_id}?user_id=${user_id}`,
		method: 'DELETE',
	})
);

// export const fetchAllStocks = () => (
// 	$.ajax({
// 		url: '/api/stocks/:symbol',
// 		method: 'GET',
// 		data: { stocks }
// 	})
// )