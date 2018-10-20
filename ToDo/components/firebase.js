import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDqMHO_WqN4tskrPqKeyu0E2l3uJWJPAuQ",
  authDomain: "todo-ecd7b.firebaseapp.com",
  databaseURL: "https://todo-ecd7b.firebaseio.com",
  projectId: "todo-ecd7b",
  storageBucket: "todo-ecd7b.appspot.com",
  messagingSenderId: "419600733994"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
