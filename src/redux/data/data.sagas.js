import { put, call, all, takeLatest } from "redux-saga/effects";

import { fetchRequestersFail, fetchRequestersSuccess } from "./data.actions";

import { getAllRequestersAndPaging } from "../../apis/data.apis";
import DataActionTypes from "./data.types";

export function* fetchData({ payload: { actor, token } }) {
    try {
        const response = yield call(getAllRequestersAndPaging, actor, token);

        yield put(fetchRequestersSuccess(response.data));
    } catch (error) {
        yield put(fetchRequestersFail(error));
    }
}

export function* onFetchRequesters() {
    yield takeLatest(DataActionTypes.FETCH_REQUESTER_START, fetchData);
}

export function* dataSagas() {
    yield all([call(onFetchRequesters)]);
}
