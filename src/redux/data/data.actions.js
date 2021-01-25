import DataActionTypes from "./data.types";

export const fetchData = (actor, token, pageIndex) => ({
    type: DataActionTypes.FETCH_DATA_START,
    payload: {
        actor,
        token,
        pageIndex
    }
});

export const clearData = () => ({
    type: DataActionTypes.CLEAR_DATA
});

export const toggleLoading = () => ({
    type: DataActionTypes.TOGGLE_LOADING
});

export const fetchDataSuccess = data => ({
    type: DataActionTypes.FETCH_DATA_SUCCESS,
    payload: data
});

export const fetchDataFail = error => ({
    type: DataActionTypes.FETCH_DATA_FAIL,
    payload: error
});

export const fetchItemDetails = (token, actor, itemId, isPanel) => ({
    type: DataActionTypes.FETCH_ITEM_DETAILS_START,
    payload: { token, actor, itemId, isPanel }
});

export const fetchItemDetailsSuccess = (itemId, item, isPanel) => ({
    type: DataActionTypes.FETCH_ITEM_DETAILS_SUCCESS,
    payload: { itemId, item, isPanel }
});

export const fetchItemDetailsFail = error => ({
    type: DataActionTypes.FETCH_ITEM_DETAILS_FAIL,
    payload: error
});

export const initItemId = itemId => ({
    type: DataActionTypes.INIT_ITEM_ID,
    payload: itemId
});

export const clearItem = () => ({
    type: DataActionTypes.CLEAR_ITEM
});

export const grantPermission = (token, actor, itemId) => ({
    type: DataActionTypes.GRANT_PERMISSION_START,
    payload: { token, actor, itemId }
});

export const grantPermissionSuccess = itemId => ({
    type: DataActionTypes.GRANT_PERMISSION_SUCCESS,
    payload: itemId
});

export const grantPermissionFail = error => ({
    type: DataActionTypes.GRANT_PERMISSION_FAIL,
    payload: error
});

export const updateConfigurations = (token, configurations) => ({
    type: DataActionTypes.UPDATE_CONFIGURATIONS_START,
    payload: { token, configurations }
});

export const updateConfigurationsSuccess = configurations => ({
    type: DataActionTypes.UPDATE_CONFIGURATIONS_SUCCESS,
    payload: configurations
});

export const updateConfigurationsFail = error => ({
    type: DataActionTypes.UPDATE_CONFIGURATIONS_FAIL,
    payload: error
});

export const acceptRegisterAmbulance = (token, username, ambulanceId) => ({
    type: DataActionTypes.ACCEPT_REGISTER_AMBULANCE_START,
    payload: { token, username, ambulanceId }
});

export const acceptRegisterAmbulanceSuccess = (ambulanceId, status) => ({
    type: DataActionTypes.ACCEPT_REGISTER_AMBULANCE_SUCCESS,
    payload: { ambulanceId, status }
});

export const acceptRegisterAmbulanceFail = error => ({
    type: DataActionTypes.ACCEPT_REGISTER_AMBULANCE_FAIL,
    payload: error
});

export const rejectRegisterAmbulance = (token, username, ambulanceId, note) => ({
    type: DataActionTypes.REJECT_REGISTER_AMBULANCE_START,
    payload: { token, username, ambulanceId, note }
});

export const rejectRegisterAmbulanceSuccess = (ambulanceId, status) => ({
    type: DataActionTypes.REJECT_REGISTER_AMBULANCE_SUCCESS,
    payload: { ambulanceId, status }
});

export const rejectRegisterAmbulanceFail = error => ({
    type: DataActionTypes.REJECT_REGISTER_AMBULANCE_FAIL,
    payload: error
});
