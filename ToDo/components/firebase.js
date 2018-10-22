import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDeKQ6etjKP5oh2y8CbQaKcdHjK9HhnhbI',
  authDomain: 'todo-5ec95.firebaseapp.com',
  databaseURL: 'https://todo-5ec95.firebaseio.com',
  projectId: 'todo-5ec95',
  storageBucket: '',
  messagingSenderId: '514275945318',
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
