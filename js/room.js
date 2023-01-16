'use strict';
console.log("room.js");

import $ from 'jquery';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, onChildAdded, onChildChanged } from "firebase/database";

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
// console.log(id);
let currentRoomRef = ref(db, id);

const sendMesBtn = $('#sendMes');
const inputMesArea = $('#inputMes');
sendMesBtn.on( 'click', ()=>{
  const mes = inputMesArea.val();
  // console.log(mes);
  const time = new Date().toJSON();
  
  //初コメ時のroomDB作成
  if(!currentRoomRef){
    currentRoomRef = ref(db, id);
  } 

  //データ送信
  push(currentRoomRef, {
    mes : mes,
    time: time
  })
});

onChildAdded(currentRoomRef, (data) => {
  console.log("onChiledAdded");
  // console.log(postElement);  これはなんだったんか謎
  const key = data.key
  console.log(key);
  const val = data.val();
  const mes = val.mes;
  console.log(mes);
  const time = formatDate(val.time);
  console.log(time);
});
onChildChanged(currentRoomRef, (data) => {
  console.log("onChiledChanged");
  // console.log(postElement);  これはなんだったんか謎
  console.log(data.key);
  console.log(data.val());
  const mes = data.val().mes;
  console.log(mes);
});

function formatDate(t){
  // console.log("formatDate");

  let result = "時間が正確に表示できませんでした";
  const d = new Date(t);
  if(Number.isNaN(d.getTime())){
    const year = t.year + 1900;
    const month = t.month + 1;
    const date = t.date;
    const hours = t.hours;
    const minutes = t.minutes;
    result = `${year}年${month}月${date}日 ${hours}:${minutes}`;
  }else{
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    result = `${year}年${month}月${date}日 ${hours}:${minutes}`;
  }
  return result;
}

//選択代入
// const mes = data.val().mes ? data.val().mes : "no mes"

//ボタンに埋め込んだ情報とるやつ
// id = sendMesBtn.data('id');
