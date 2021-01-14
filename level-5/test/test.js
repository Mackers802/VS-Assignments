const express = require("express")
const app = express()

const data = [{name: "bill"}]

app.listen(8000, () => {
    console.log("server on port 8000 is working")
})

app.get("/", (req, resp) => {
    resp.send(data)
})