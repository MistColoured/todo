import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyADpqYKb74r4MvqDlO_kt5Z3eptd1gmy78',
  authDomain: 'messenger-f9dad.firebaseapp.com',
  databaseURL: 'https://messenger-f9dad.firebaseio.com',
  projectId: 'messenger-f9dad',
  storageBucket: 'messenger-f9dad.appspot.com',
  messagingSenderId: '635096016410',
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
