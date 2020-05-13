import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBGbdDmYr5QIpjksLo6w3fGcHhxPLlfRas',
  authDomain: 'ecomdb-ff34b.firebaseapp.com',
  databaseURL: 'https://ecomdb-ff34b.firebaseio.com',
  projectId: 'ecomdb-ff34b',
  storageBucket: 'ecomdb-ff34b.appspot.com',
  messagingSenderId: '684894486024',
  appId: '1:684894486024:web:d8cf5406ffc2e09853dbbd',
  measurementId: 'G-37QGBTT4KC'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
