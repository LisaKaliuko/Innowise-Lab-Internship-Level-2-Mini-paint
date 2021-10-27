import { handleActions } from 'redux-actions';
import { AnyAction } from 'redux';

import { DrawActionsTypes } from '../actions/draw.actions';

interface InitialState {
  currentTool: string;
  thickness: number;
  color: string;
  errors: {
    picError: string;
  };
}

const initialState: InitialState = {
  currentTool: 'line',
  thickness: 3,
  color: '#000000',
  errors: {
    picError: '',
  },
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

    [DrawActionsTypes.SEND_PIC]: (state: InitialState) => ({
      ...state,
    }),

    [DrawActionsTypes.SEND_PIC_SUCCESS]: (state: InitialState) => ({
      ...state,
    }),

    [DrawActionsTypes.SEND_PIC_ERROR]: (
      state: InitialState,
      action: AnyAction
    ) => ({
      ...state,
      errors: {
        picError: action.payload.picError,
      },
    }),
  },

  initialState
);

export default drawReducer;
