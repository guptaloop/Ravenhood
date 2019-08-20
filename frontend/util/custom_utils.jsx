// custom PriceChart utils
export const genPrices = (arr) => {
	// arr = [chartPeriod, mktPrice] =>  [250, 360.43]
	const validPeriods = [20, 100, 500, 2500];
	let year = 300;
	let period = arr[0];
	let prices = [];
	
	while (period > 0 && validPeriods.includes(arr[0])) {
		if (year === 300) {
			let priceObj = { date: year, price: arr[1] };
			prices.unshift(priceObj);
		} else {
			let priceObj = {
				date: year,
				price: parseFloat((((Math.random() + 0.005) * 1000)).toFixed(2))
			};
			prices.unshift(priceObj);
		}

		if (arr[0] === 20) { period -= 1; year -= 1; }
		else if (arr[0] === 100) { period -= 4; year -= 4; }
		else if (arr[0] === 500) { period -= 20; year -= 20; }
		else if (arr[0] === 2500) { period -= 100; year -= 100; }
	}
	return prices;
};


// custom NewsFeed utils
export const formatDate = (str) => {
	const newDate = str.slice(0, 10);
	const today = (new Date().toJSON().slice(0, 10).replace(/-/g, '/'));
	const diff = Math.floor((Date.parse(today) - Date.parse(newDate)) / 86400000);
	return diff;
};

export const formatTitle = (title, lim=50) => {
	title = title.replace('&#39;', `'`);
	title = title.replace('&amp;', '&');
	while (title.includes('&quot;')) { 
		title = title.replace('&quot;', `"`); 
	}
	return (
		title.length > lim ? title.slice(0, lim) + '...' : title.slice(0, lim)
	);
};

export const getViewCount = () => (	Math.floor((Math.random() * 1000)) );