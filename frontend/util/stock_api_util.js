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

export const fetchWatchlist = (user_id, stock_id) => (
	$.ajax ({
		url: `/api/watchlist_items/`,
		method: 'GET',
		data: { user_id, stock_id }
	})
);


///// creating shell for index 
//
// export const fetchAllStocks = stocks => (
// 	$.ajax({
// 		url: '/api/stocks/:symbol',
// 		method: 'GET',
// 		data: { stocks }
// 	})
// )