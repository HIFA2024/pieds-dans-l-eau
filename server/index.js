const express = require("express");
const cors = require("cors");
const userRoutes = require('./routers/userrouter')
const blogRoutes = require ('./routers/blogrouter')
const commentRoutes = require('./routers/commentrouter')
const {sequelize} = require('./database/sequelize')
// const cloudinary = require('./cloudinary/cloudinary')
const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());


app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);
app.use('/comments', commentRoutes);



// app.get("/", (req, res) => {
//   res.send("Hello from the server!");
// });

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});