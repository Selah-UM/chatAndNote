'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');
const { v4: uuidv4 } = require('uuid');
const Rooms = require('../models/room');
const Room = require('../models/room');

router.get('/new', authenticationEnsurer, (req, res, next) => {
    res.render('new', {
        user: req.user,
        getRandomInt
        // getUsableRoomId
    });
});
router.post('/', authenticationEnsurer, async (req, res, next) => {
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
    res.redirect('../');
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