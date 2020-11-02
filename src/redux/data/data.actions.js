import DataActionTypes from "./data.types";

export const fetchRequesters = (actor, token) => ({
    type: DataActionTypes.FETCH_REQUESTER_START,
    payload: {
        actor,
        token
    }
});

export const fetchRequestersSuccess = requesters => ({
    type: DataActionTypes.FETCH_REQUESTER_SUCCESS,
    payload: requesters
});

export const fetchRequestersFail = error => ({
    type: DataActionTypes.FETCH_REQUESTER_FAIL,
    payload: error
});
