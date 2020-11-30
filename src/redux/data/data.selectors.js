import { createSelector } from "reselect";

const selectData = state => state.data;

export const selectCurrentData = createSelector([selectData], data => data.data);

export const selectCurrentItemId = createSelector([selectData], data => data.selectCurrentItemId);

export const selectCurrentItem = createSelector([selectData], data => data.currentItem);

export const selectIsPanel = createSelector([selectData], data => data.isPanel);
