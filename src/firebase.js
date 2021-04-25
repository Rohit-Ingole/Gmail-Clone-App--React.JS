import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqk7cR4qBvLUQ0eoz6cf2H2_VoV8AsAho",
  authDomain: "clone-app-f525d.firebaseapp.com",
  projectId: "clone-app-f525d",
  storageBucket: "clone-app-f525d.appspot.com",
  messagingSenderId: "88475832709",
  appId: "1:88475832709:web:cdabf850adeac9f4c4f4ec",
  measurementId: "G-DDYHPNF2QB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
