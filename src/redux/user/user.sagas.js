import { takeLatest, all, call, put } from "redux-saga/effects";

import { login } from "../../apis/user.apis";

import { loginSuccess, loginFail } from "./user.actions";
import UserActionTypes from "./user.types";

export function* signIn({ payload: { username, password } }) {
    try {
        const response = yield call(login, username, password);

        yield put(loginSuccess(response.data));
    } catch (error) {
        yield put(loginFail(error));
    }
}

export function* onSignIn() {
    yield takeLatest(UserActionTypes.LOGIN_START, signIn);
}

export function* userSagas() {
    yield all([call(onSignIn)]);
}
