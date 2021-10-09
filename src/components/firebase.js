import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyAdpvPfrlX7YDvLJSYFJcGo3utBtBeiIY0",
  authDomain: "contacts-app-d8f4b.firebaseapp.com",
  projectId: "contacts-app-d8f4b",
  storageBucket: "contacts-app-d8f4b.appspot.com",
  messagingSenderId: "1004628490784",
  appId: "1:1004628490784:web:37da827ebb065ecdb65a45",
});

const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = app.firestore();

export { db, auth, storage, provider };
