import TableActionTypes from "./table.types";

const INITIAL_STATE = {
    activeItem: "reports",
    filterItem: "Tất cả",
    keyword: ""
};

const tableReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TableActionTypes.SET_ACTIVE_ITEM:
            return {
                ...state,
                activeItem: action.payload
            };
        case TableActionTypes.SET_FILTER_ITEM:
            return {
                ...state,
                filterItem: action.payload
            };
        case TableActionTypes.SET_KEYWORD:
            return {
                ...state,
                keyword: action.payload
            };
        default:
            return state;
    }
};

export default tableReducer;
