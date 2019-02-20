 import * as firebase from 'firebase';
 
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDAKuCv5l9F8ujk7OM4g1XP2J8eIMeBE6k",
    authDomain: "upscale-bb926.firebaseapp.com",
    databaseURL: "https://upscale-bb926.firebaseio.com",
    projectId: "upscale-bb926",
    storageBucket: "upscale-bb926.appspot.com",
    messagingSenderId: "563485723144"
  };
  firebase.initializeApp(config);


  export default firebase;