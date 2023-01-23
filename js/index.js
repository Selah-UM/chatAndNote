'use strict';
console.log("index.js");

// import { initializeFBApp } from "/public/javascripts/firebase.bundle.js";
// initializeFBApp();
// const User = require('../models/user');
// if(User){
//     console.log("we can use User");
// }
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,  onAuthStateChanged } from "firebase/auth";

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
const analytics = getAnalytics(app);

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log("log in!" + user);
    } else {
        console.log("log out!");
    }
});