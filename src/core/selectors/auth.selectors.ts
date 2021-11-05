import { createSelector } from 'reselect';

import { RootState } from '../reducers/root.reducer';

const getAuth = (state: RootState) => state.auth;

export const selectAuthErrors = createSelector(getAuth, (auth) => auth.errors);

export const selectUser = createSelector(getAuth, (auth) => auth.user.email);

export const selectAuthLoading = createSelector(
  getAuth,
  (auth) => auth.isLoading
);

export const selectCreativeTheme = createSelector(
  getAuth,
  (auth) => auth.creativeTheme
);
