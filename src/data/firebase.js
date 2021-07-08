import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAi1sttjbO4lYE7mMf2WDPuS1TZ8ZEtjww",
  authDomain: "cuurve-85f3d.firebaseapp.com",
  projectId: "cuurve-85f3d",
  storageBucket: "cuurve-85f3d.appspot.com",
  messagingSenderId: "370452650259",
  appId: "1:370452650259:web:705fae1be6cd67e66fa2e6",
  measurementId: "G-N644PNBGXT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };

export default db;
