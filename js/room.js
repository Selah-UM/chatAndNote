'use strict';
console.log("room.js");
import $ from 'jquery';
$(function(){
  $(".roomName").css("color","green")
});
import { initializeApp } from "firebase/app";
// import { getDatabase, } from "firebase/database";
import { getDatabase, ref, set } from "firebase/database";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";
// import { getAnalytics } from "firebase/analytics";

// import dotenv from 'dotenv';
// dotenv.config();
// const env = process.env;
// const firebaseConfig = env.FIREBASE_CONFIG;

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
const db = getDatabase();

// firebase.initializeApp(firebaseConfig);
// const db = firebase.database();

set(ref(db,"A-key"), {
  val: "a"
});

