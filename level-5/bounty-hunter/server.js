const express = require("express");
const app = express();

app.use("/bountys" , require("./routes/bountyhunterRouter.js"))

app.listen(9000, () => {
    console.log("this server is running on 9000");
  });
  
