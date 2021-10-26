import { createSelector } from 'reselect';

import { RootState } from '../reducers/root.reducer';

const getAuth = (state: RootState) => state.auth;
const getDraw = (state: RootState) => state.draw;

export const selectAuthErrors = createSelector(getAuth, (auth) => auth.errors);

export const selectUser = createSelector(getAuth, (auth) => auth.user.email);

export const selectAuthLoading = createSelector(
  getAuth,
  (auth) => auth.isLoading
);

export const selectTool = createSelector(getDraw, (draw) => draw.currentTool);

export const selectThickness = createSelector(
  getDraw,
  (draw) => draw.thickness
);

export const selectColor = createSelector(getDraw, (draw) => draw.color);
