import { put, call, takeEvery } from 'redux-saga/effects';

import { Action } from '../interfaces/action.interface';
import {
  AuthActionsTypes,
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logOutSuccess,
  logOutError,
} from '../actions/auth.actions';
import { registerUser, loginUser, logOutUser } from '../services/auth.service';

function* registerSaga(action: Action<AuthActionsTypes>) {
  const { email, password } = action.payload;
  try {
    const responseEmail: string = yield call(registerUser, email, password);
    yield put(registerSuccess(responseEmail));
  } catch (e) {
    yield put(registerError((e as Error)?.message || 'some error'));
  }
}

function* loginSaga(action: Action<AuthActionsTypes>) {
  const { email, password } = action.payload;
  try {
    const responseEmail: string = yield call(loginUser, email, password);
    yield put(loginSuccess(responseEmail));
  } catch (e) {
    yield put(loginError((e as Error)?.message || 'some error'));
  }
}

function* logOutSaga() {
  try {
    yield call(logOutUser);
    yield put(logOutSuccess());
  } catch (e) {
    yield put(logOutError((e as Error)?.message || 'some error'));
  }
}

export function* authWatcher(): Generator {
  yield takeEvery(AuthActionsTypes.REGISTER, registerSaga);
  yield takeEvery(AuthActionsTypes.LOGIN, loginSaga);
  yield takeEvery(AuthActionsTypes.LOG_OUT, logOutSaga);
}
