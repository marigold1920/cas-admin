import TableActionTypes from "./table.types";

export const setActiveItem = item => ({
    type: TableActionTypes.SET_ACTIVE_ITEM,
    payload: item
});
