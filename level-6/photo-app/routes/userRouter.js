const express = require("express")
const userRouter = express.Router();
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const { response } = require("express");

// Signup ✅
userRouter.post("/signup", (req, res, next) => {
  User.findOne({ 
    username: req.body.username.toLowerCase() }, (err, user) => {
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

// login ✅
userRouter.post("/login", (req, res, next) => {
  User.findOne(
    { username: req.body.username.toLowerCase() },
    (err, user) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      if (!user) {
        res.status(403);
        return next(new Error("username or password are incorrect"));
      }
      if (req.body.password !== user.password) {
        res.status(403);
        return next(new Error("username or password are incorrect"));
      }
      const token = jwt.sign(user.toObject(), process.env.SECRET);
      return res.status(200).send({ token, user });
  
    }
  );
});

userRouter.put("/userId", (req, res, next) => {
  console.log(res.body)
  User.findOneAndUpdate(
    { user: req.params._id},
    req.body,
    { new: true },
    (err, updatedUser) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      console.log(res.body)
      console.log(req.body)
      console.log(updatedUser)
      return res.status(200).send(updatedUser)
    }
  )
})

module.exports = userRouter