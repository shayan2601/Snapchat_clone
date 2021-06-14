import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABGaU6XURFG-i6QNs6-jOGe0B0t4SSvK4",
  authDomain: "snapchat-clone-77a1a.firebaseapp.com",
  projectId: "snapchat-clone-77a1a",
  storageBucket: "snapchat-clone-77a1a.appspot.com",
  messagingSenderId: "588358388613",
  appId: "1:588358388613:web:867cc01842fcb9b90dd2ec",
  measurementId: "G-27ZF9LD0DL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, provider, auth, storage };
