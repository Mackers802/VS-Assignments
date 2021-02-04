const express = require("express")
const commentRouter = express.Router()
const Comment = require("../models/comment.js")


// get all comments
commentRouter.get("/", (req, res, next) => {
    Comment.find((err, comments) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(comments);
    });
  });


// get user comment
commentRouter.get("/user", (req, res, next) => {
    Comment.find({ user: req.user._id }, (err, comments) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(commentss);
    });
  });

//   add comment
commentRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id;
    const newComment = new Comment(req.body);
    newComment.save((err, savedComment) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(savedComment);
    });
  });

// update comment
commentRouter.put("/:commentId", (req, res, next) => {
    Comment.findOneAndUpdate(
      { _id: req.params.commentId, user: req.user._id },
      req.body,
      { new: true },
      (err, updatedComment) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        return res.status(201).send(updatedComment);
      }
    );
  });

//   delete comment
commentRouter.delete("/:commentId", (req, res, next) => {
    Comment.findOneAndDelete(
      { _id: req.params.commentId, user: req.user._id },
      (err, deletedComment) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        return res
          .status(200)
          .send(`Successfully delete todo: ${deletedComment.title}`);
      }
    );
  });

module.exports = commentRouter