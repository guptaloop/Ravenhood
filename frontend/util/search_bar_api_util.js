export const searchStock = symbol => (
	$.ajax({
		url: `/api/stocks/${symbol}`,
		method: 'GET',
	})
);