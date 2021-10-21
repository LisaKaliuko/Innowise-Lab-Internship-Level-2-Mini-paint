import { fork } from 'redux-saga/effects';

import { authWatcher } from './auth.saga';

export function* rootSaga(): Generator {
  yield fork(authWatcher);
}
