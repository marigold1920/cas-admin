import UserActionTypes from "./user.types";

export const login = user => ({
    type: UserActionTypes.LOGIN_START,
    payload: user
});

export const loginSuccess = user => ({
    type: UserActionTypes.LOGIN_SUCCESS,
    payload: user
});

export const loginFail = error => ({
    type: UserActionTypes.LOGIN_FAIL,
    payload: error
});

export const logout = () => ({
    type: UserActionTypes.LOGOUT
});
