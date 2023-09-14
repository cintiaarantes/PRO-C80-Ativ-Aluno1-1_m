//npm install firebase@8.2.3

import firebase from "firebase";
require("@firebase/firestore");
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAE8DhlX4FyhiFH0UNMiYnLL0IGUbDHQag",
  authDomain: "bibliotecaeletronica-c7163.firebaseapp.com",
  projectId: "bibliotecaeletronica-c7163",
  storageBucket: "bibliotecaeletronica-c7163.appspot.com",
  messagingSenderId: "678545841789",
  appId: "1:678545841789:web:2093a3ba29033cbdc35b14"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
