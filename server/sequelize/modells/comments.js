const { DataTypes } = require('sequelize');
const sequelize = require('../../indexx');

const Comment = sequelize.define('Comment', {
  idcomment: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = Comment;