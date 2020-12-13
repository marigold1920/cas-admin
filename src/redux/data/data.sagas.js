import { put, call, all, takeLatest } from "redux-saga/effects";

import {
    fetchDataSuccess,
    fetchDataFail,
    fetchItemDetailsSuccess,
    fetchItemDetailsFail,
    grantPermissionFail,
    grantPermissionSuccess,
    updateConfigurationsFail,
    updateConfigurationsSuccess,
    acceptRegisterAmbulanceFail,
    acceptRegisterAmbulanceSuccess,
    rejectRegisterAmbulanceSuccess,
    rejectRegisterAmbulanceFail
} from "./data.actions";
import { updateStatusCode } from "../message/message.action";

import {
    acceptRegisterAmbulance,
    fetchData,
    fetchItemDetails,
    grantPermission,
    rejectRegisterAmbulance,
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

function* acceptRegisterAmbulanceStart({ payload: { token, ambulanceId } }) {
    try {
        const response = yield call(acceptRegisterAmbulance, token, ambulanceId);

        yield put(updateStatusCode(201));
        yield put(acceptRegisterAmbulanceSuccess(ambulanceId, response.data));
    } catch (error) {
        yield put(acceptRegisterAmbulanceFail(error));
    }
}

function* rejectRegisterAmbulanceStart({ payload: { token, ambulanceId, note } }) {
    try {
        const response = yield call(rejectRegisterAmbulance, token, ambulanceId, note);

        yield put(rejectRegisterAmbulanceSuccess(ambulanceId, response.data));
    } catch (error) {
        yield put(rejectRegisterAmbulanceFail(error));
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

export function* onAcceptRegisteAmbulance() {
    yield takeLatest(DataActionTypes.ACCEPT_REGISTER_AMBULANCE_START, acceptRegisterAmbulanceStart);
}

export function* onRejectRegisteAmbulance() {
    yield takeLatest(DataActionTypes.REJECT_REGISTER_AMBULANCE_START, rejectRegisterAmbulanceStart);
}

export function* dataSagas() {
    yield all([
        call(onFetchData),
        call(onFetchItemDetails),
        call(onGrantPermission),
        call(onUpdateConfigurations),
        call(onAcceptRegisteAmbulance),
        call(onRejectRegisteAmbulance)
    ]);
}
