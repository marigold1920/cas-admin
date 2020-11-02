import { createSelector } from "reselect";

const selectData = state => state.data;

export const selectRequesters = createSelector([selectData], data => data.requesters);
