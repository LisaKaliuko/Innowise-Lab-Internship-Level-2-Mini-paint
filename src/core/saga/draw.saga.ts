import { put, call, takeEvery } from 'redux-saga/effects';

import { Action } from '../interfaces/action.interface';
import {
  DrawActionsTypes,
  sendPicSuccess,
  sendPicError,
} from '../actions/draw.actions';
import { sendPic } from '../services/draw.service';

function* sendPicSaga(action: Action<DrawActionsTypes>) {
  const { picture, user, cb } = action.payload;
  try {
    yield call(sendPic, picture, user, cb);
    yield put(sendPicSuccess());
  } catch (e) {
    yield put(sendPicError((e as Error)?.message || 'some error'));
  }
}

export function* drawWatcher(): Generator {
  yield takeEvery(DrawActionsTypes.SEND_PIC, sendPicSaga);
}
