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
const inputMesTextArea = $('#inputMes');
sendMesBtn.on( 'click', ()=>{
  const mes = inputMesTextArea.val();
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
  return new Promise((resolve,reject) => {
    resolve(getMes(data));
  }).then((mesData) => {
    makeMesCard(mesData);
  });
});
onChildChanged(currentRoomRef, (data) => {
  console.log("onChiledChanged");
  getMes(data);
});

/**
 * データを受け取り、表示に適するよう処理する
 * @param {Object} data //firebaseから渡ってくるデータ 
 * @returns {Object}
 */
function getMes(data){
  // console.log("getMes");
  const key = data.key
  const val = data.val();
  const mes = val.mes;
  const uid = val.uid;
  const username = userMap.get(uid);
  const time = formatDate(val.time);
  return{
    key      : key,
    mes      : mes,
    username : username,
    time     : time
  }
}

const mesCardsArea = $('#MesCardsArea');
const mesArea = document.getElementById('mesCardsArea');
/**
 * メッセージを画面に表示させる
 * @param {Object} mesData //getMes関数で整えられたメッセージデータ
 */
function makeMesCard(mesData){
  console.log("makeMesCard");
  // console.log(mesData);
  const mes = mesData.mes;
  const username = mesData.username;
  const time = mesData.time;

  console.log(mesArea);
  const mesCard = document.createElement('div');
  mesCard.className = 'card';
  mesArea.appendChild(mesCard);

  // $('<div>', { class:'card'}).appnedTo(mesCardsArea);
  // const mesCard = $('<div>', {class:'card'});
  // $('<div>', {id:'mesCard', class:'card'});

  $('#MesCardsArea').append("<div class='card><?div>");
  // $("body").append(ELement1, ELement2, ELement3);
  // $('<div>', { id:'hoge', class:'fuga', text:'piyo' }).appnedTo('#');
}

/**
 * 入力されたメッセージをトリムして、必要であればヒントをplaceholderへ
 * @param {String} mes 取得したメッセージデータ
 * @returns { Boolean | String} トリム済みメッセージまたはfalse
 */
function trimMes(mes){
  if(mes == ""){
    inputMesTextArea.val("");
    // inputMesArea.placeholder = "こちらにメッセージをどうぞ";
    inputMesTextArea.attr('placeholder', "こちらにメッセージをどうぞ");
    return false;
  }
  const trimedMes = mes.trim();
  if(trimedMes == ""){
    inputMesTextArea.val("");
    inputMesTextArea.attr('placeholder', "空白や改行だけでの送信は受け付けておりません");
    // inputMesArea.placeholder = "空白や改行だけでの送信は受け付けておりません"
    return false;
  }
  inputMesTextArea.val("");
  inputMesTextArea.placeholder = "";
  inputMesTextArea.removeAttr('placeholder');
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
