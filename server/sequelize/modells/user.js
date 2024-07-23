const { DataTypes } = require('sequelize');
const sequelize = require('../../indexx'); 

const User = sequelize.define('User', {
  iduser: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image_url: {
    type: DataTypes.STRING
  }
});

module.exports = User;