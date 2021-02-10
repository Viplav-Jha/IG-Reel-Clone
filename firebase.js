import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDv8AfD8K6Hf_bQJP_XiPgzskZliuCrIWc",
    authDomain: "ig-reels-5cbcd.firebaseapp.com",
    databaseURL: "https://ig-reels-5cbcd.firebaseio.com",
    projectId: "ig-reels-5cbcd",
    storageBucket: "ig-reels-5cbcd.appspot.com",
    messagingSenderId: "219663646013",
    appId: "1:219663646013:web:0097df5398d53d464b9954",
    measurementId: "G-X8M1QZN87V"
  };
  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
   
  export default db;