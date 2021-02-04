const express = require("express");
const userRouter = express.Router();
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

// Signup
userRouter.post("/signup", (req, res, next) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    if (user) {
      res.status(403);
      return next(new Error("username taken"));
    }
    const newUser = new User(req.body);
    newUser.save((err, savedUser) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      const token = jwt.sign(savedUser.toObject(), process.env.SECRET);
      return res.status(201).send({ token, user: savedUser });
    });
  });
});

// login
userRouter.post("/login", (req, res, next) => {
  User.findOne(
    { username: req.body.username.toLowerCase() },
    { password: req.body.password },
    (err, user) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      if (!user) {
        res.status(403);
        return next(new Error("username or password are incorrect"));
      }
      if (req.body.username !== user.password) {
        res.status(403);
        return next(new Error("username or password are incorrect"));
      }
      const token = jwt.sign(user.toObject(), process.env.SECRET);
      return res.status(200).send({ token, user });
    }
  );
});

module.exports = userRouter;
