import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import authReducer from './auth.reducer';
import drawReducer from './draw.reducer';

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  draw: drawReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
