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
