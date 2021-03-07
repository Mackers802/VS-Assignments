const express = require("express")
const commentRouter = express.Router()
const Comment = require("../models/comment.js")


// get all comments ✅ 
commentRouter.get("/", (req, res, next) => {
    Comment.find((err, comments) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(comments);
    });
  });

  //   // get comments by post 
  commentRouter.get("/:postId", (req, res, next) => {
    Comment.find({ post: req.params.postId }, (err, comment) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(comment);
    });
  });

  
  //   add comment ✅ 
  commentRouter.post("/:postId", (req, res, next) => {
    const post = req.params.postId
    const commentDescription = req.body.commentDescription
    const user = req.user._id
    // req.body.issue = req.issue._id;
  console.log("req.body", req.body.user)
      const newComment = new Comment( {post: { _id: post} , commentDescription, user: { _id: user} } );
      console.log(newComment)
      newComment.save((err, savedComment) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        return res.status(201).send(savedComment);
      });
    });


// Get comment by Id ✅ 
commentRouter.get("/:commentId", (req, res, next) => {
  Comment.find({_id: req.params.commentId}, (err, comment) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comment)
  })
})





// update comment
commentRouter.put("/:commentId", (req, res, next) => {
    Comment.findOneAndUpdate(
      { _id: req.params.commentId },
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
      { _id: req.params.commentId },
      (err, deletedComment) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        return res
          .status(200)
          .send(`Successfully ${deletedComment.commentDescription}`);
      }
    );
  });


module.exports = commentRouter