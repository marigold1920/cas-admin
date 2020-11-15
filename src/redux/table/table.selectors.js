import { createSelector } from "reselect";

const selectTable = state => state.table;

export const selectActiveItem = createSelector([selectTable], table => table.activeItem);
