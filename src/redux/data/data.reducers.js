import DataActionTypes from "./data.types";

const INITIAL_STATE = {
    data: [],
    error: null,
    currentItem: null,
    currentItemId: null
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
                currentItemId: action.payload.itemId
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
                currentItemId: null
            };
        default:
            return state;
    }
};

export default dataReducer;
