import * as SessionUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
	type: RECEIVE_CURRENT_USER,
	currentUser
});

export const logoutCurrentUser = () => ({
	type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
	type: RECEIVE_SESSION_ERRORS,
	errors
});

export const signup = user => dispatch => (
	SessionUtil.signup(user).then(user => (
		dispatch(receiveCurrentUser(user))
		), errors => (
			dispatch(receiveErrors(errors.responseJSON))
		)
	)
);

export const login = user => dispatch => (
	SessionUtil.login(user).then(user => (
		dispatch(receiveCurrentUser(user))
		), errors => (
			dispatch(receiveErrors(errors.responseJSON))
		)
	)
);

export const logout = () => dispatch => (
	SessionUtil.logout().then(user => (dispatch(logoutCurrentUser())))
);

export const updateGold = (user_id, gold) => dispatch => (
	SessionUtil.updateGold(user_id, gold).then(
		user => dispatch(receiveCurrentUser(user)))
);