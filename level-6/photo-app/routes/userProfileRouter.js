const express = require("express");
const userProfileRouter = express.Router();
const User = require("../models/user.js");

userProfileRouter.put("/:userId", (req, res, next) => {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    (err, updatedUser) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedUser);
    }
  );
});

userProfileRouter.get("/:userId", (req, res, next) => {
  User.find({ _id: req.params.userId }, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(user);
  });
});

module.exports = userProfileRouter;
