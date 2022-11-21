'use strict';
console.log("room.js");

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { admin } from 'firebase-admin';
import  serviceAccount  from '../chatandnote-firebase-adminsdk-ng4pe-427f00ca05.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chatandnote-default-rtdb.firebaseio.com"
});

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
