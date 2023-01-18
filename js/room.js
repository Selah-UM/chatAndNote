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

//このチャットルームのDB指定
const dataDiv = $('#data');
const id = dataDiv.data('id');
let currentRoomRef = ref(db, id);

//usersのマップ作製
const users = dataDiv.data('users');
const userMap = new Map(); // key: userId, value: username
users.forEach((a) => {
  userMap.set(a.id, a.username);
});
console.log(userMap);

//メッセージの送信
const sendMesBtn = $('#sendMes');
const inputMesArea = $('#inputMes');
sendMesBtn.on( 'click', ()=>{
  const mes = inputMesArea.val();
  const trimedMes = trimMes(mes);
  if(!trimedMes){return;}
  const uid = sendMesBtn.data('uid');
  const time = new Date().toJSON();
  
  //初コメ時のroomDB作成
  if(!currentRoomRef){
    currentRoomRef = ref(db, id);
  } 

  //データ送信
  push(currentRoomRef, {
    mes : mes,
    uid : uid,
    time: time
  });
});

//メッセージデータの受信リスナ
onChildAdded(currentRoomRef, (data) => {
  console.log("onChiledAdded");
  getMes(data);
});
onChildChanged(currentRoomRef, (data) => {
  console.log("onChiledChanged");
  getMes(data);
});

/**
 * データを受け取り、表示に適するよう処理する
 * @param {Object} data //firebaseから渡ってくるデータ 
 */
function getMes(data){
  const key = data.key
  // console.log(key);
  const val = data.val();
  const mes = val.mes;
  console.log(mes);
  const uid = val.uid;
  console.log(uid);
  const username = userMap.get(uid);
  console.log(username);
  const time = formatDate(val.time);
  console.log(time);
}

/**
 * 入力されたメッセージをトリムして、必要であればヒントをplaceholderへ
 * @param {String} mes 取得したメッセージデータ
 * @returns { Boolean | String} トリム済みメッセージまたはfalse
 */
function trimMes(mes){
  if(mes == ""){
    inputMesArea.val("");
    // inputMesArea.placeholder = "こちらにメッセージをどうぞ";
    inputMesArea.attr('placeholder', "こちらにメッセージをどうぞ");
    return false;
  }
  const trimedMes = mes.trim();
  if(trimedMes == ""){
    inputMesArea.val("");
    inputMesArea.attr('placeholder', "空白や改行だけでの送信は受け付けておりません");
    // inputMesArea.placeholder = "空白や改行だけでの送信は受け付けておりません"
    return false;
  }
  inputMesArea.val("");
  inputMesArea.placeholder = "";
  inputMesArea.removeAttr('placeholder');
    return trimedMes;
}

/**
 * 日時表示を見やすく整える。
 * @param {JSON} t DBにある日時情報
 * @returns {String} フォーマットされた日時表示
 */
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
