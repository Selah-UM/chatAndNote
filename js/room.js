'use strict';
console.log("room.js");

import $ from 'jquery';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, push, onChildAdded, onChildChanged } from "firebase/database";

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

const id = $('#id').text();
console.log(id);
let currentRoomRef = ref(db, id);

// $('#inputMes').val("200");//値セット
const sendMesBtn = $('#sendMes');
const inputMesArea = $('#inputMes');
sendMesBtn.on( 'click', ()=>{
  var mes = inputMesArea.val();
  // console.log(mes);
  
  //初コメ時のroomDB作成
  if(!id){
    id = sendMesBtn.data('id');
    // console.log(id);
    currentRoomRef = ref(db, id);
  } 

  push(currentRoomRef, {
    val:mes
  })
});

onChildAdded(currentRoomRef, (data) => {
  console.log("onChiledAdded");
  // console.log(postElement);  これはなんだったんか謎
  console.log(data.key);
  console.log(data.val());
  // console.log(data.val().text);
  // console.log(data.val().mes);
  // console.log(data.val().author);
});
onChildChanged(currentRoomRef, (data) => {
  console.log("onChiledChanged");
  console.log(postElement);
  console.log(data.key);
  console.log(data.val().text);
  console.log(data.val().author);
});

  // set(ref(db, id), {
  //   val: mes
  // });