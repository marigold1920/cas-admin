import { createSelector } from "reselect";

const selectTable = state => state.table;

export const selectActiveItem = createSelector([selectTable], table => table.activeItem);

export const selectFilterItem = createSelector([selectTable], table => table.filterItem);

export const selectKeyword = createSelector([selectTable], table => table.keyword);
