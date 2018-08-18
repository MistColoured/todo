import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCkPHsT6xO9RrIT8JMkpjNIkFOaZAp4XVo',
  authDomain: 'swatch3-31df9.firebaseapp.com',
  databaseURL: 'https://swatch3-31df9.firebaseio.com',
  projectId: 'swatch3-31df9',
  storageBucket: 'swatch3-31df9.appspot.com',
  messagingSenderId: '550951474712',
};
firebase.initializeApp(config);

export default firebase;
