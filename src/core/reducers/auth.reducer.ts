import { handleActions } from 'redux-actions';
import { AnyAction } from 'redux';

import { AuthActionsTypes } from '../actions/auth.actions';

interface InitialState {
  user: {
    email: string;
  };
  errors: {
    loginError: string;
    registerError: string;
    logOutError: string;
  };
  isLoading: boolean;
  creativeTheme: boolean;
}

const initialState: InitialState = {
  user: {
    email: '',
  },
  errors: {
    loginError: '',
    registerError: '',
    logOutError: '',
  },
  isLoading: false,
  creativeTheme: false,
};

const authReducer = handleActions<InitialState>(
  {
    [AuthActionsTypes.REGISTER]: (state: InitialState) => ({
      ...state,
      isLoading: true,
    }),

    [AuthActionsTypes.REGISTER_SUCCESS]: (
      state: InitialState,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...action.payload },
      errors: { ...initialState.errors },
      isLoading: false,
    }),

    [AuthActionsTypes.REGISTER_ERROR]: (
      state: InitialState,
      action: AnyAction
    ) => ({ ...state, errors: { ...action.payload }, isLoading: false }),

    [AuthActionsTypes.LOGIN]: (state: InitialState) => ({
      ...state,
      isLoading: true,
    }),

    [AuthActionsTypes.LOGIN_SUCCESS]: (
      state: InitialState,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...action.payload },
      errors: { ...initialState.errors },
      isLoading: false,
    }),

    [AuthActionsTypes.LOGIN_ERROR]: (
      state: InitialState,
      action: AnyAction
    ) => ({ ...state, errors: { ...action.payload }, isLoading: false }),

    [AuthActionsTypes.LOG_OUT]: (state: InitialState) => ({
      ...state,
      isLoading: true,
    }),

    [AuthActionsTypes.LOG_OUT_SUCCESS]: (state: InitialState) => ({
      ...initialState,
      isLoading: false,
      creativeTheme: state.creativeTheme,
    }),

    [AuthActionsTypes.LOG_OUT_ERROR]: (
      state: InitialState,
      action: AnyAction
    ) => ({ ...state, errors: { ...action.payload }, isLoading: false }),

    [AuthActionsTypes.TOGGLE_THEME]: (state: InitialState) => ({
      ...state,
      creativeTheme: !state.creativeTheme,
    }),
  },

  initialState
);

export default authReducer;
