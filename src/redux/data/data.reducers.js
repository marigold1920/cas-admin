import DataActionTypes from "./data.types";

const INITIAL_STATE = {
    data: [],
    error: null
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
        default:
            return state;
    }
};

export default dataReducer;
