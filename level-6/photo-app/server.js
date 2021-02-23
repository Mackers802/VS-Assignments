const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

require("dotenv").config()
const expressJwt = require("express-jwt")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect('mongodb://localhost:27017/photogfriends', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, 
() => console.log("connected to Photog Friends Db"))

app.use("/auth", require("./routes/userRouter.js")) /* ✅  */
app.use("/api", expressJwt({secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use("/api/posts", require("./routes/postRouter.js"))
app.use("/api/comments", require("./routes/commentRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
  })

app.listen(9000, () => {
    console.log("Running on port 9000 Homie")
})