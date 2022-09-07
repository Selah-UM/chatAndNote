'use strict';
const {sequelize, DataTypes} = require('./sequelize-loader');

const Room = sequelize.define(
  'rooms',
  {
    roomId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    roomName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        fields: ['createdBy']
      }
    ]
  }
);

module.exports = room;