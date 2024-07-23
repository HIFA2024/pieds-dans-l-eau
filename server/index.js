const express =require("express")
const cors = require("cors")
const db =require('./indexx.js')
const router =require('./sequelize/routers/blogss.js')
const PORT = 3000
const app = express()

app.use(express.json())
app.use(cors())

app.use('/', router)


app.get("/", (req, res) => {
    res.send("Hello from the server!");
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });