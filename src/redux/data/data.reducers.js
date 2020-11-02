import DataActionTypes from "./data.types";

const INITIAL_STATE = {
    requesters: [],
    error: null
};

const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DataActionTypes.FETCH_REQUESTER_SUCCESS:
            return {
                ...state,
                requesters: action.payload
            };
        case DataActionTypes.FETCH_REQUESTER_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default dataReducer;
