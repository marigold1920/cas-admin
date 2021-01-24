import UserActionTypes from "./user.types";

export const login = (username, password) => {
    console.log(username, password);
    return {
        type: UserActionTypes.LOGIN_START,
        payload: { username, password }
    };
};

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
