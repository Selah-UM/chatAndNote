'use strict';
console.log("room.js");

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const admin = require("firebase-admin");
import { admin } from 'firebase-admin';
// const serviceAccount = require("../chatandnote-firebase-adminsdk-ng4pe-427f00ca05.json");
import { serviceAccount } from '../chatandnote-firebase-adminsdk-ng4pe-427f00ca05.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chatandnote-default-rtdb.firebaseio.com"
});

// const firebaseConfig = {
//     apiKey: "AIzaSyATXy5h6R5jFoy1gEppzBXABhwfxfCOEYc",
//     authDomain: "chatandnote.firebaseapp.com",
//     databaseURL: "https://chatandnote-default-rtdb.firebaseio.com/",
//     projectId: "chatandnote",
//     storageBucket: "chatandnote.appspot.com",
//     messagingSenderId: "1076201869761",
//     appId: "1:1076201869761:web:b4b81fec24525fead7df40",
//     measurementId: "G-CFWX5TT79V"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const dotenv = require('dotenv');
// dotenv.config();
// const env = process.env;
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = env.FIREBASE_CONFIG;
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = admin.database();

const r =  db.ref("A-key").push();
r.set("val-a");

// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// const db = firebase.database();
