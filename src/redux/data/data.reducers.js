import DataActionTypes from "./data.types";
import { grantPermission } from "./data.utils";

const INITIAL_STATE = {
    data: [],
    error: null,
    currentItem: null,
    currentItemId: null,
    isPanel: false
};

const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DataActionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        case DataActionTypes.FETCH_DATA_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case DataActionTypes.FETCH_ITEM_DETAILS_SUCCESS:
            return {
                ...state,
                currentItem: action.payload.item,
                currentItemId: action.payload.itemId,
                isPanel: action.payload.isPanel
            };
        case DataActionTypes.FETCH_ITEM_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
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
        case DataActionTypes.GRANT_PERMISSION_FAIL:
            return {
                ...state,
                error: action.payload
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
        case DataActionTypes.UPDATE_CONFIGURATIONS_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default dataReducer;
