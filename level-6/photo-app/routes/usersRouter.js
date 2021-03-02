const express = require("express")
const usersRouter = express.Router()
const users = require("../models/post.js")

// get all users ✅ 
usersRouter.get("/", (req, res, next) => {
    users.get((err, users) => {
      if (err) {
        res.status(500);
        return next(err);
      } 
      return res.status(200).send(users);
    });
  });

    
    module.exports = usersRouter