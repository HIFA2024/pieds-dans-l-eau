const { DataTypes } = require('sequelize');
const sequelize = require('../../indexx.js'); 

const Blog = sequelize.define('blog', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image_url: {
    type: DataTypes.STRING
  }
});

module.exports = Blog;