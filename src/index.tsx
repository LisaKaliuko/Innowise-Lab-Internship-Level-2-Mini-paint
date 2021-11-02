import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import 'firebase/auth';
import 'firebase/firestore';

import App from '@src/app.component';
import { firebaseConfig } from '@config/fb.config';
import { rootReducer } from '@reducers/root.reducer';
import { rootSaga } from '@saga/root.saga';
import { loadState, saveState } from '@helpers/state.helpers';
import { GlobalStyle } from './global.styles';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const sagaMiddleware = createSagaMiddleware();

const initialState = loadState();

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <GlobalStyle />
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
