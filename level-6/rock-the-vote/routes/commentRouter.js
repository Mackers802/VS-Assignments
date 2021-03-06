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

//   // get comments by issue
commentRouter.get("/:issueId", (req, res, next) => {
  Comment.find({ issue: req.params.issueId}, (err, comment) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(comment);
  });
});

// get user comment
commentRouter.get("/:commentId", (req, res, next) => {
    // console.log(req.params)
    Comment.findOne({ _id: req.params.commentId}, (err, comment) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(comment);
    });
  });

//   add comment
commentRouter.post("/:issueId", (req, res, next) => {
  const issue = req.params.issueId
  const description = req.body.description
  const user = req.user._id
  // req.body.issue = req.issue._id;
console.log("req.body", req.body.user)
    const newComment = new Comment( {issue: { _id: issue} , description, user: { _id: user} } );
    console.log(newComment)
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
      { _id: req.params.commentId, user: req.params._id },
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
      { _id: req.params.commentId, user: req.params._id },
      (err, deletedComment) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        return res
          .status(200)
          .send(`Successfully ${deletedComment}`);
      }
    );
  });

module.exports = commentRouter