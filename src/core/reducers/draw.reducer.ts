import { handleActions } from 'redux-actions';
import { AnyAction } from 'redux';

import { DrawActionsTypes } from '../actions/draw.actions';
import { PicObj } from '../interfaces/draw.interface';

interface InitialState {
  currentTool: string;
  thickness: number;
  color: string;
  allPics: Array<PicObj>;
  errors: {
    picError: string;
    getPicsErr: string;
  };
  isLoading: boolean;
  sortEmail: string;
}

const initialState: InitialState = {
  currentTool: 'line',
  thickness: 3,
  color: '#000000',
  allPics: [],
  errors: {
    picError: '',
    getPicsErr: '',
  },
  isLoading: false,
  sortEmail: '',
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
      isLoading: true,
    }),

    [DrawActionsTypes.SEND_PIC_SUCCESS]: (state: InitialState) => ({
      ...state,
      isLoading: false,
    }),

    [DrawActionsTypes.SEND_PIC_ERROR]: (
      state: InitialState,
      action: AnyAction
    ) => ({
      ...state,
      errors: {
        ...state.errors,
        picError: action.payload.picError,
      },
      isLoading: false,
    }),

    [DrawActionsTypes.GET_ALL_PICS]: (state: InitialState) => ({
      ...state,
      isLoading: true,
    }),

    [DrawActionsTypes.GET_ALL_PICS_SUCCESS]: (
      state: InitialState,
      action: AnyAction
    ) => ({
      ...state,
      allPics: [...action.payload.arr],
      isLoading: false,
    }),

    [DrawActionsTypes.GET_ALL_PICS_ERROR]: (
      state: InitialState,
      action: AnyAction
    ) => ({
      ...state,
      errors: {
        ...state.errors,
        getPicsErr: action.payload.getPicsErr,
      },
      isLoading: false,
    }),

    [DrawActionsTypes.SET_SORT_EMAIL]: (
      state: InitialState,
      action: AnyAction
    ) => ({
      ...state,
      sortEmail: action.payload.sortEmail,
    }),
  },

  initialState
);

export default drawReducer;
