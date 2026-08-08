"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.auth = void 0;
const app_1 = require("@firebase/app");
const firestore_1 = require("@firebase/firestore");
const auth_1 = require("@firebase/auth");
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
const app = (0, app_1.initializeApp)(firebaseConfig);
const auth = (0, auth_1.getAuth)(app);
exports.auth = auth;
const db = (0, firestore_1.getFirestore)(app);
exports.db = db;
