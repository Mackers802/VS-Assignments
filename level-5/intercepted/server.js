const express = require("express")
const app = express()

app.listen(9000, () => {
    console.log("this server is running on port 9000 hommie")
})

app.use(express.json())

// app.use("/object", (req, res, next) => {
// next()
// app.use("/object", require("./routes/objectRouter.js"))
// })

app.use("/object", (req, res, next) => {
    console.log('first')
    next()
    })

    app.use("/object", require("./routes/objectRouter.js"))