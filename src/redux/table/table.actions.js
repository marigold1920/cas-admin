import TableActionTypes from "./table.types";

export const setActiveItem = item => ({
    type: TableActionTypes.SET_ACTIVE_ITEM,
    payload: item
});

export const setFilterItem = item => ({
    type: TableActionTypes.SET_FILTER_ITEM,
    payload: item
});

export const setKeyword = keyword => ({
    type: TableActionTypes.SET_KEYWORD,
    payload: keyword
});
