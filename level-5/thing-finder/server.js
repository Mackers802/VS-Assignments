const express = require("express")
const app = express()
const uuid = require("uuid").v4

app.listen(9000, () => {
    console.log("this server is running on port 9000")
})

app.use(express.json())
// when you get a request for "/camera" go look in this file "./routes/cameraRouter.js"
app.use("/camera", require("./routes/cameraRouter.js")) 