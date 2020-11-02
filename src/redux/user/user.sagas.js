import { takeLatest, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";

export function* signIn({ payload: { username, password } }) {
    try {
        yield console.log(username, password);
    } catch (error) {
        console.log(error);
    }
}

export function* onSignIn() {
    yield takeLatest(UserActionTypes.LOGIN, signIn);
}

export function* userSagas() {
    yield all([call(onSignIn)]);
}
