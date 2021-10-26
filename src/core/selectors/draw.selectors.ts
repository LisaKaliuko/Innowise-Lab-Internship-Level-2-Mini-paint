import { createSelector } from 'reselect';

import { RootState } from '../reducers/root.reducer';

const getDraw = (state: RootState) => state.draw;

export const selectTool = createSelector(getDraw, (draw) => draw.currentTool);

export const selectThickness = createSelector(
  getDraw,
  (draw) => draw.thickness
);

export const selectColor = createSelector(getDraw, (draw) => draw.color);
