'use strict';
console.log("room.js");

import $ from 'jquery';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

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
const db = getDatabase();

set(ref(db,"A-key"), {
  val: "a"
});

// $('#inputMes').val("200");//値セット
$("#sendMes").on( 'click', ()=>{
  // 値を取得
  var mes = $('#inputMes').val();
  console.log(mes);
});