import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiIiZ7DL1JgUE6Lrdu0CnvxBYDgCblZLM",
  authDomain: "fir-clone-f3825.firebaseapp.com",
  projectId: "fir-clone-f3825",
  storageBucket: "fir-clone-f3825.appspot.com",
  messagingSenderId: "699666418472",
  appId: "1:699666418472:web:95cd1e3edac3a478fc5e1d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
