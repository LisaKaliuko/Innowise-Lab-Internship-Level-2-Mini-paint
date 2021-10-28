import { put, call, takeEvery } from 'redux-saga/effects';

import { Action } from '../interfaces/action.interface';
import {
  DrawActionsTypes,
  sendPicSuccess,
  sendPicError,
  getAllPicsSuccess,
  getAllPicsError,
} from '../actions/draw.actions';
import { sendPic, getPics } from '../services/draw.service';
import { PicObj } from '../interfaces/draw.interface';

function* sendPicSaga(action: Action<DrawActionsTypes>) {
  const { picture, user, cb } = action.payload;
  try {
    yield call(sendPic, picture, user, cb);
    yield put(sendPicSuccess());
  } catch (e) {
    yield put(sendPicError((e as Error)?.message || 'some error'));
  }
}

function* getPicsSaga() {
  try {
    const arr: Array<PicObj> = yield call(getPics);
    if (arr) yield put(getAllPicsSuccess(arr));
  } catch (e) {
    yield put(getAllPicsError((e as Error)?.message || 'some error'));
  }
}

export function* drawWatcher(): Generator {
  yield takeEvery(DrawActionsTypes.SEND_PIC, sendPicSaga);
  yield takeEvery(DrawActionsTypes.GET_ALL_PICS, getPicsSaga);
}
