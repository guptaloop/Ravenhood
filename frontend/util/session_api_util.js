// the following 3 methods will allow us to sign up a user, login a user, and logout a user. it will hit the db via ajax calls 

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