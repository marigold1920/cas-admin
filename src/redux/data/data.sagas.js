import { put, call, all, takeLatest } from "redux-saga/effects";

import {
    fetchDataSuccess,
    fetchDataFail,
    fetchItemDetailsSuccess,
    fetchItemDetailsFail
} from "./data.actions";

import { fetchData, fetchItemDetails } from "../../apis/data.apis";

import DataActionTypes from "./data.types";

function* fetchDataStart({ payload: { actor, token } }) {
    try {
        const response = yield call(fetchData, actor, token);

        yield put(fetchDataSuccess(response.data));
    } catch (error) {
        yield put(fetchDataFail(error));
    }
}

function* fetchItemDetailsStart({ payload: { token, actor, itemId, isPanel } }) {
    try {
        const response = yield call(fetchItemDetails, token, actor, itemId);

        yield put(fetchItemDetailsSuccess(itemId, response.data, isPanel));
    } catch (error) {
        yield put(fetchItemDetailsFail(error));
    }
}

export function* onFetchData() {
    yield takeLatest(DataActionTypes.FETCH_DATA_START, fetchDataStart);
}

export function* onFetchItemDetails() {
    yield takeLatest(DataActionTypes.FETCH_ITEM_DETAILS_START, fetchItemDetailsStart);
}

export function* dataSagas() {
    yield all([call(onFetchData), call(onFetchItemDetails)]);
}
