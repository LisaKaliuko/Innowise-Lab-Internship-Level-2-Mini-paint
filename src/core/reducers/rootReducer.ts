import { combineReducers } from 'redux';
import { createStore } from 'redux';

import authReducer from './authReducer';

const initialState = {};

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(rootReducer, initialState);
