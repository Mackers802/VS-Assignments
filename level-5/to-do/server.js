const express = require("express")
const app = express()
const morgan = require("morgan")


app.listen(9000, (req, res) => {
    console.log("server running on port 9000 mon!")
})

app.use(morgan("dev"))

app.use("/todo", require("./routes/todoRouter.js"))

// 