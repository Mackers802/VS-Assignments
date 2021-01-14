const express = require("express")
const objectRouter = express.Router()

const interData = [{
    name: "jim",
    age: 40,
}]

objectRouter.get("/", (req, res) => {
    res.send(interData)
    console.log("this is the next data")
})



module.exports=objectRouter