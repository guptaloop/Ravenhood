
export const signup = user => (
	$.ajax({
		url: '/api/users',
		method: 'POST',
		data: { user }
	})
);

export const login = user => (
	$.ajax({
		url: '/api/session',
		method: 'POST',
		data: { user }
	})
);

export const logout = () => (
	$.ajax({
		url: '/api/session',
		method: 'DELETE'
	})
);

export const updateGold = (user_id, gold) => (
	$.ajax({
		url: `/api/session/${user_id}?gold=${gold}`,
		method: 'PATCH',
	})
);