'use strict';
const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@db/chat_and_note'
);

module.exports = {
  sequelize,
  DataTypes
};