import DataActionTypes from "./data.types";
import { grantPermission, handleRegisterAmbulance } from "./data.utils";

const INITIAL_STATE = {
    data: [],
    error: null,
    currentItem: null,
    currentItemId: null,
    isPanel: false,
    totalPage: 1,
    currentPage: 1,
    loading: false
};

const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DataActionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                totalPage: action.payload.totalPage,
                currentPage: action.payload.currentPage
            };
        case DataActionTypes.CLEAR_DATA:
            return {
                ...state,
                data: []
            };
        case DataActionTypes.TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading
            };
        case DataActionTypes.FETCH_ITEM_DETAILS_SUCCESS:
            return {
                ...state,
                currentItem: action.payload.item,
                currentItemId: action.payload.itemId,
                isPanel: action.payload.isPanel
            };
        case DataActionTypes.CLEAR_ITEM:
            return {
                ...state,
                currentItem: null,
                currentItemId: null,
                isPanel: false
            };
        case DataActionTypes.GRANT_PERMISSION_SUCCESS:
            return {
                ...state,
                data: grantPermission(state.data, action.payload)
            };
        case DataActionTypes.INIT_ITEM_ID:
            return {
                ...state,
                currentItemId: action.payload
            };
        case DataActionTypes.UPDATE_CONFIGURATIONS_SUCCESS:
            return {
                ...state,
                data: { ...state.data, configurations: action.payload }
            };
        case DataActionTypes.ACCEPT_REGISTER_AMBULANCE_SUCCESS:
        case DataActionTypes.REJECT_REGISTER_AMBULANCE_SUCCESS:
            return {
                ...state,
                data: handleRegisterAmbulance(
                    state.data,
                    action.payload.ambulanceId,
                    action.payload.status
                )
            };
        case DataActionTypes.FETCH_DATA_FAIL:
        case DataActionTypes.FETCH_ITEM_DETAILS_FAIL:
        case DataActionTypes.GRANT_PERMISSION_FAIL:
        case DataActionTypes.UPDATE_CONFIGURATIONS_FAIL:
        case DataActionTypes.ACCEPT_REGISTER_AMBULANCE_FAIL:
        case DataActionTypes.REJECT_REGISTER_AMBULANCE_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default dataReducer;
