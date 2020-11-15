import TableActionTypes from "./table.types";

const INITIAL_STATE = {
    activeItem: "requests"
};

const tableReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TableActionTypes.SET_ACTIVE_ITEM:
            return {
                ...state,
                activeItem: action.payload
            };
        default:
            return state;
    }
};

export default tableReducer;
