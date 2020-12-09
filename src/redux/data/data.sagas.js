import { put, call, all, takeLatest } from "redux-saga/effects";

import {
    fetchDataSuccess,
    fetchDataFail,
    fetchItemDetailsSuccess,
    fetchItemDetailsFail,
    grantPermissionFail,
    grantPermissionSuccess,
    updateConfigurationsFail,
    updateConfigurationsSuccess
} from "./data.actions";

import {
    fetchData,
    fetchItemDetails,
    grantPermission,
    updateConfigurations
} from "../../apis/data.apis";

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

function* grantPermissionStart({ payload: { token, actor, itemId } }) {
    try {
        yield call(grantPermission, token, actor, itemId);
        yield put(grantPermissionSuccess(itemId));
    } catch (error) {
        yield put(grantPermissionFail(error));
    }
}

function* updateConfigurationsStart({ payload: { token, configurations } }) {
    try {
        const response = yield call(updateConfigurations, token, configurations);

        yield put(updateConfigurationsSuccess(response.data));
    } catch (error) {
        yield put(updateConfigurationsFail(error));
    }
}

export function* onFetchData() {
    yield takeLatest(DataActionTypes.FETCH_DATA_START, fetchDataStart);
}

export function* onFetchItemDetails() {
    yield takeLatest(DataActionTypes.FETCH_ITEM_DETAILS_START, fetchItemDetailsStart);
}

export function* onGrantPermission() {
    yield takeLatest(DataActionTypes.GRANT_PERMISSION_START, grantPermissionStart);
}

export function* onUpdateConfigurations() {
    yield takeLatest(DataActionTypes.UPDATE_CONFIGURATIONS_START, updateConfigurationsStart);
}

export function* dataSagas() {
    yield all([
        call(onFetchData),
        call(onFetchItemDetails),
        call(onGrantPermission),
        call(onUpdateConfigurations)
    ]);
}
