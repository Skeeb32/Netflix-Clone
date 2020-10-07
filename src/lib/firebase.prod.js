import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCg_ZwcfJ2OHUMhbf7AGSCJTJgpce_8Hk4',
  authDomain: 'netflix-clone-ba11c.firebaseapp.com',
  databaseURL: 'https://netflix-clone-ba11c.firebaseio.com',
  projectId: 'netflix-clone-ba11c',
  storageBucket: 'netflix-clone-ba11c.appspot.com',
  messagingSenderId: '153701290819',
  appId: '1:153701290819:web:7f3ea03c343ce4bd2c95f6',
  measurementId: 'G-8SD09E6978',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
