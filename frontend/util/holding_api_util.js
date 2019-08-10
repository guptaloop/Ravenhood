
export const fetchHoldings = (user_id) => (
	$.ajax({
		url: `/api/holdings/${user_id}`,
		method: 'GET',
	})
);

export const updateHolding = (holding_id, user_id, shares) => (
	$.ajax({
		url: `/api/holdings/${holding_id}?user_id=${user_id}&shares=${shares}`,
		method: 'PATCH',
	})
);

export const createHolding = (user_id, symbol, shares, price) => (
	$.ajax({
		url: `/api/holdings?user_id=${user_id}&symbol=${symbol}&shares=${shares}&price=${price}`,
		method: 'POST',
	})
);

export const destroyHolding = (holding_id, user_id) => (
	$.ajax({
		url: `/api/holdings/${holding_id}?user_id=${user_id}`,
		method: 'DELETE',
	})
);