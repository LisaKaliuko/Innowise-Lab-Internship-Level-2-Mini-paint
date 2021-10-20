import firebase from 'firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { store } from '../core/reducers/root.reducer';

export const firebaseConfig = {
  apiKey: 'AIzaSyCgh90qQTXnY6oc52LCR1yuXwBGniULo_Q',
  authDomain: 'mini-paint-3c7f7.firebaseapp.com',
  projectId: 'mini-paint-3c7f7',
  storageBucket: 'mini-paint-3c7f7.appspot.com',
  messagingSenderId: '1053498032104',
  appId: '1:1053498032104:web:f35f01255c5ecfb2da6e5d',
};

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
