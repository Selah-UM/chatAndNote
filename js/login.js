'use strict';
console.log("login.js");

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth, getRedirectResult, signInWithRedirect, signInWithPopup, GithubAuthProvider, onAuthStateChanged } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);

const provider = new GithubAuthProvider();

const auth = getAuth();

signInWithRedirect(auth, provider);

getRedirectResult(auth)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    if (credential) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const token = credential.accessToken;
      // ...
    }

    // The signed-in user info.
    const user = result.user;
    console.log(user);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });


// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//     const credential = GithubAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     console.log("token=" + token);

//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GithubAuthProvider.credentialFromError(error);
//     // ...
//   });

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.logI(uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});