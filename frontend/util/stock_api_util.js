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

// export const fetchAllStocks = () => (
// 	$.ajax({
// 		url: '/api/stocks/:symbol',
// 		method: 'GET',
// 		data: { stocks }
// 	})
// )