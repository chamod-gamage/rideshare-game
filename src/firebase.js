// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQj-LDAeqHQ6Vz0REnkI-HN5zDMn9Ud5A",
  authDomain: "rideshare-game.firebaseapp.com",
  projectId: "rideshare-game",
  storageBucket: "rideshare-game.appspot.com",
  messagingSenderId: "1098450550369",
  appId: "1:1098450550369:web:9d51d9bc91d93926123420",
  measurementId: "G-7CFPEF2CKR",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;
