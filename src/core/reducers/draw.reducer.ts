import { handleActions } from 'redux-actions';
import { AnyAction } from 'redux';

import { DrawActionsTypes } from '../actions/draw.actions';

interface InitialState {
  currentTool: string;
}

const initialState: InitialState = {
  currentTool: 'line',
};

const drawReducer = handleActions<InitialState>(
  {
    [DrawActionsTypes.CHOOSE_TOOL]: (
      state: InitialState,
      action: AnyAction
    ) => ({
      ...state,
      currentTool: action.payload.toolName,
    }),
  },

  initialState
);

export default drawReducer;
