import { createSelector } from "reselect";

const selectData = state => state.data;

export const selectCurrentData = createSelector([selectData], data => data.data);

export const selectCurrentItemId = createSelector([selectData], data => data.currentItemId);

export const selectCurrentItem = createSelector([selectData], data => data.currentItem);

export const selectIsPanel = createSelector([selectData], data => data.isPanel);

export const selectTotalPage = createSelector([selectData], data => data.totalPage);

export const selectCurrentPage = createSelector([selectData], data => data.currentPage);

export const selectLoading = createSelector([selectData], data => data.loading);
