const {Sequelize}=require("sequelize");


const sequelize = new Sequelize(
    "travel",
    "root",
    "Root",
    {
      host: "localhost",
      dialect: "mysql",
    }
  );

  sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

    sequelize.sync()
.then(() => {
  console.log('Tables created successfully!');
})
.catch((error) => {
  console.error('Unable to create tables:', error);
});




   

    module.exports = sequelize