
import { initializeApp } from "firebase/app";

import { getFirestore, collection } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAayEE8_biziDmrgP7xvnsCHLPs50ytVQY",
  authDomain: "fir-9d399.firebaseapp.com",
  projectId: "fir-9d399",
  storageBucket: "fir-9d399.appspot.com",
  messagingSenderId: "947971637300",
  appId: "1:947971637300:web:4c8201ceff9be8578d0a61",
  measurementId: "G-RN83VV01QZ"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");