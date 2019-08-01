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
		url: `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${query}&safeSearch=strict&key=AIzaSyCcuBtun7iUjt3z1uH98ZykfsHQVkm81Mo`,
		method: 'GET',
		// data: { query }
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