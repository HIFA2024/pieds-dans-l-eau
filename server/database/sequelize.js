const { Sequelize, DataTypes } = require('sequelize');

// Create a Sequelize instance
const sequelize = new Sequelize('travel', 'fourat', 'Liverpool1892', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define models
const User = sequelize.define("users", {
  iduser: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  fullname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  image_url: {
    type: DataTypes.STRING(255),
    allowNull: false,
  }
});

const Blog = sequelize.define("blogs", {
  idblog: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  place :{
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});

const Comment = sequelize.define("comments", {
  idcomment: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
});

// Define relationships
User.hasMany(Blog, { foreignKey: 'userId' });
Blog.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });

Blog.hasMany(Comment, { foreignKey: 'blogId' });
Comment.belongsTo(Blog, { foreignKey: 'blogId' });

// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Sync models with database (create tables)
sequelize
  .sync()
  .then(() => {
    console.log('Tables created successfully!');
  })
  .catch((error) => {
    console.error('Unable to create tables:', error);
  });

// Export models and sequelize instance
module.exports = {
  sequelize,
  User,
  Blog,
  Comment,
};
