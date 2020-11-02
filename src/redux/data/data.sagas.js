import { put, call, all, takeLatest } from "redux-saga/effects";

import { fetchDataSuccess, fetchDataFail } from "./data.actions";

import { getAllRequestersAndPaging } from "../../apis/data.apis";
import DataActionTypes from "./data.types";

export function* fetchData({ payload: { actor, token } }) {
    try {
        const response = yield call(getAllRequestersAndPaging, actor, token);

        yield put(fetchDataSuccess(response.data));
    } catch (error) {
        yield put(fetchDataFail(error));
    }
}

export function* onFetchData() {
    yield takeLatest(DataActionTypes.FETCH_DATA_START, fetchData);
}

export function* dataSagas() {
    yield all([call(onFetchData)]);
}
