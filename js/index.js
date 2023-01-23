'use strict';
console.log("index.js");

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyATXy5h6R5jFoy1gEppzBXABhwfxfCOEYc",
    authDomain: "chatandnote.firebaseapp.com",
    databaseURL: "https://chatandnote-default-rtdb.firebaseio.com/",
    projectId: "chatandnote",
    storageBucket: "chatandnote.appspot.com",
    messagingSenderId: "1076201869761",
    appId: "1:1076201869761:web:b4b81fec24525fead7df40",
    measurementId: "G-CFWX5TT79V"
}
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

auth.onAuthStateChanged((user) => {
    if (user) {
      const currentUser = firebase.auth().currentUser;
      console.log('chat.js currentUser = ' + currentUser);
  
      var uid = user.uid;
      console.log("chat.js uid = " + uid);
      console.log("ログイン中");
      chageDisplayByIslogin(true);
    } else {
      console.log("未ログイン");
      chageDisplayByIslogin(false);
    }
});

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       console.log(uid);
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });