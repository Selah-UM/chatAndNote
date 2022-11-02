'use strict';
console.log("room.js");

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const dotenv = require('dotenv');
// dotenv.config();
// const env = process.env;
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = env.FIREBASE_CONFIG;
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = firebase.database();

// const r =  db.ref("A-key").push();
// r.set("key-a");

// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// const db = firebase.database();
