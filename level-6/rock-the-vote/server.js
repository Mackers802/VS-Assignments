const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

require("dotenv").config()

const expressJwt = require("express-jwt")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect(
    'mongodb://localhost:27017/rockthevote',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    },
    () => console.log('Connected to the Rock the Vote DB')
  )

//  Routes
app.use("/auth", require("./routes/userRouter.js"))
app.use("/api", expressJwt({secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use("/api/issue", require("./routes/issueRouter.js"))
app.use("/api/comment", require("./routes/commentRouter"))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
  })

app.listen(9000, () => {
    console.log("server running on port 9000")
})


// wandavision