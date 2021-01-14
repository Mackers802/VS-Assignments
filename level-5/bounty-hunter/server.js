const express = require("express");
const app = express();


app.listen(9000, () => {
    console.log("this server is running on 4000");
  });
  
app.use(express.json())

app.use("/bounty")