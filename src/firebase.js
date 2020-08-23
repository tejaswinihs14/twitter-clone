import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAlWkXCoVKYA6Ylv0M44qccwrfhNsgG3A8",
    authDomain: "twitter-clone-387b8.firebaseapp.com",
    databaseURL: "https://twitter-clone-387b8.firebaseio.com",
    projectId: "twitter-clone-387b8",
    storageBucket: "twitter-clone-387b8.appspot.com",
    messagingSenderId: "217464995007",
    appId: "1:217464995007:web:ca7acbdd0aa72748191a0a",
    measurementId: "G-KB7G0VBJBB"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  
const db = firebaseApp.firestore();

export default db;