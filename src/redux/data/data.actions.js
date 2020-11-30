import DataActionTypes from "./data.types";

export const fetchData = (actor, token) => ({
    type: DataActionTypes.FETCH_DATA_START,
    payload: {
        actor,
        token
    }
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
