'use strict';
console.log("room.js");

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// import dotenv from 'dotenv';
// dotenv.config();
// const env = process.env;
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
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

// const analytics = getAnalytics(app);
// const db = admin.database();
set(ref(db,"A-key"), {
  val: "a"
});
// const r =  db.ref("A-key").push();
// r.set("val-a");

// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

