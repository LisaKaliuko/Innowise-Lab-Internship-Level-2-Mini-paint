import { combineReducers } from 'redux';
import { createStore } from 'redux';

import authReducer from './auth.reducer';

const initialState = {};

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(rootReducer, initialState);
