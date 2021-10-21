import { createAction } from 'redux-actions';

export enum AuthActionsTypes {
  REGISTER = '[AUTH] REGISTER',
  REGISTER_SUCCESS = '[AUTH] REGISTER_SUCCESS',
  REGISTER_ERROR = '[AUTH] REGISTER_ERROR',

  LOGIN = '[AUTH] LOGIN',
  LOGIN_SUCCESS = '[AUTH] LOGIN_SUCCESS',
  LOGIN_ERROR = '[AUTH] LOGIN_ERROR',

  LOG_OUT = '[AUTH] LOG_OUT',
  LOG_OUT_SUCCESS = '[AUTH] LOG_OUT_SUCCESS',
  LOG_OUT_ERROR = '[AUTH] LOG_OUT_ERROR',
}

export const register = createAction(AuthActionsTypes.REGISTER);

export const registerSuccess = createAction(
  AuthActionsTypes.REGISTER_SUCCESS,
  (email: string) => ({ email })
);

export const registerError = createAction(
  AuthActionsTypes.REGISTER_ERROR,
  (registerError: string) => ({ registerError })
);

export const login = createAction(AuthActionsTypes.LOGIN);

export const loginSuccess = createAction(
  AuthActionsTypes.LOGIN_SUCCESS,
  (email: string) => ({ email })
);

export const loginError = createAction(
  AuthActionsTypes.LOGIN_ERROR,
  (loginError: string) => ({ loginError })
);

export const logOut = createAction(AuthActionsTypes.LOG_OUT);

export const logOutSuccess = createAction(AuthActionsTypes.LOG_OUT_SUCCESS);

export const logOutError = createAction(
  AuthActionsTypes.LOG_OUT_ERROR,
  (logOutError: string) => ({ logOutError })
);
