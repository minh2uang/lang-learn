import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtGMn3nNZ46uF1tos0v3ulUy0KsE4VzLw",
  authDomain: "los-proyectos-personales.firebaseapp.com",
  projectId: "los-proyectos-personales",
  storageBucket: "los-proyectos-personales.appspot.com",
  messagingSenderId: "1045357725659",
  appId: "1:1045357725659:web:bf40329ebff02bcb3709fe",
  measurementId: "G-LJS7KXLKHX",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
