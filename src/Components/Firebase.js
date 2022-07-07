import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbrOrTRGNUgYgzUtC3OBZBxjB7sN1DsYY",
  authDomain: "challenge-29227.firebaseapp.com",
  databaseURL: "https://challenge-29227.firebaseio.com",
  projectId: "challenge-29227",

  storageBucket: "challenge-29227.appspot.com",
  messagingSenderId: "200820577638",
  appId: "1:200820577638:web:774bbe8886d490a9a964a7",
  measurementId: "G-XH7LHGT3RN",
};
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
