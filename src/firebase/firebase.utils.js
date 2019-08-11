import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC-scQOAnCQwafdmUKHzm2NES-YgwE_Ahg",
  authDomain: "crwn-db-5204d.firebaseapp.com",
  databaseURL: "https://crwn-db-5204d.firebaseio.com",
  projectId: "crwn-db-5204d",
  storageBucket: "",
  messagingSenderId: "605457306696",
  appId: "1:605457306696:web:98e8eafb346fab53"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
