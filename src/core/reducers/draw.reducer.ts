import { handleActions } from 'redux-actions';
import { AnyAction } from 'redux';

import { DrawActionsTypes } from '../actions/draw.actions';

interface InitialState {
  currentTool: string;
  thickness: number;
  color: string;
}

const initialState: InitialState = {
  currentTool: 'line',
  thickness: 3,
  color: '#000000',
};

const drawReducer = handleActions<InitialState>(
  {
    [DrawActionsTypes.SET_TOOL]: (state: InitialState, action: AnyAction) => ({
      ...state,
      currentTool: action.payload.toolName,
    }),

    [DrawActionsTypes.SET_THICKNESS]: (
      state: InitialState,
      action: AnyAction
    ) => ({
      ...state,
      thickness: action.payload.thickness,
    }),

    [DrawActionsTypes.SET_COLOR]: (state: InitialState, action: AnyAction) => ({
      ...state,
      color: action.payload.color,
    }),
  },

  initialState
);

export default drawReducer;
