'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');
const { v4: uuidv4 } = require('uuid');
const Room = require('../models/room');
const User = require('../models/user');
const dotenv = require('dotenv');
dotenv.config();
const env = process.env;
const { initializeApp } = require('firebase/app');
const { getAnalytics } = require('firebase/analytics');

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
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.database();

router.get('/', authenticationEnsurer, async (req, res, next) => {
    const rooms = await Room.findAll({
      where: {
        createdBy: req.user.id
      },
      order: [['updatedAt', 'DESC']]
    });
    res.render('rooms', {
      user: req.user,
      rooms: rooms
    });
});
router.get('/new', authenticationEnsurer, (req, res, next) => {
    res.render('new', {
        user: req.user,
        getRandomInt
        // getUsableRoomId
    });
});
router.get('/:id', authenticationEnsurer, async (req, res, next) => {
    const room = await Room.findOne({
      where: {
        id: req.params.id
      },
      order: [['updatedAt', 'DESC']]
    });
    if (room) {
        res.render('room', {
          user: req.user,
          room: room,
          users: [req.user] //今はひとつだけってこと
        });
      } else {
        const err = new Error('指定されたチャットルームは見つかりません');
        err.status = 404;
        next(err);
      }
});

router.post('/', authenticationEnsurer, async (req, res, next) => {
    // document.getElementById("sendBtn").disabled = true;

    const id = uuidv4();
    const updatedAt = new Date();
    let isPermanent = false;
    if(req.body.permanent === 'on'){
        isPermanent = true;
    }
    const room = await Room.create({
      id: id,
      roomId: req.body.roomId,
      roomName: req.body.roomName.slice(0, 255) || '名前のないルーム',
      passcode: req.body.passcode,
      createdBy: req.user.id,
      updatedAt: updatedAt,
      isActive: true,
      isPermanent: isPermanent
    });
    res.redirect('/chatRooms/' + room.id);
});

async function getUsableRoomId(){
    return getRandomInt();
    // const schedules = await Rooms.findAll({
    //     where: {
    //       createdBy: req.user.id
    //     },
    //     order: [['updatedAt', 'DESC']]
    //   });
}
function getRandomInt() {
    const min = Math.ceil(10000000);
    const max = Math.floor(100000000);
    return Math.floor(Math.random() * (max - min) + min);
}  

module.exports = router;


const r =  db.ref("A-key").push();
r.set("key-a");
