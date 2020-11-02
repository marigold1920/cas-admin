import { createSelector } from "reselect";

const selectData = state => state.data;

export const selectCurrentData = createSelector([selectData], data => data.data);
