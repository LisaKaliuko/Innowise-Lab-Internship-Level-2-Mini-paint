import { fork } from 'redux-saga/effects';

import { authWatcher } from './auth.saga';
import { drawWatcher } from './draw.saga';

export function* rootSaga(): Generator {
  yield fork(authWatcher);
  yield fork(drawWatcher);
}
