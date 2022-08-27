import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAtqyOmeuMFBvsQuuqUblRZ0961deKNj_U',
  authDomain: 'workplay-ecommerce.firebaseapp.com',
  projectId: 'workplay-ecommerce',
  storageBucket: 'workplay-ecommerce.appspot.com',
  messagingSenderId: '219665610797',
  appId: '1:219665610797:web:40c9780aaef1923ee7a0a4',
};

// init firebase
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();

//init firebase auth
const auth = getAuth();

export { db, auth };
