// create ajax requests for pulling stock (company) data from the backend

export const fetchStock = symbol => (
	$.ajax({
		url: `/api/stocks/${symbol}`,
		method: 'GET',
		data: { symbol }
	})
);

export const fetchNews = (symbol) => (
	$.ajax({
		url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=house%20lannister&safeSearch=strict&key=AIzaSyCcuBtun7iUjt3z1uH98ZykfsHQVkm81Mo',
		// https://www.youtube.com/watch?v=${videoId}
		method: 'GET',
		data: { symbol }
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