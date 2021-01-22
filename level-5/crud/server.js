const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(morgan("dev"))

app.use("/crud", require("./routes/crudRouter.js"))

mongoose.connect("mongodb://localhost:27017/cruddb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, 
() => console.log("connected to Db"))

app.listen(9000, () =>{
    console.log("this server is running")
})

