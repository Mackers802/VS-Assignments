const express = require("express")
const postRouter = express.Router()
const Post = require("../models/post.js")

// get all posts ✅ 
postRouter.get("/", (req, res, next) => {
    Post.find((err, posts) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(posts);
    });
  });

  // add post ✅ 
  postRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id;
    const newPost = new Post(req.body);
    newPost.save((err, savedPost) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(savedPost);
    });
  });

// get post by postId ✅ 
postRouter.get("/:postId", (req, res, next) => {
  Post.find({ _id: req.params.postId }, (err, post) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(post)
  })
})

  // get all posts by user
postRouter.get("/user", (req, res, next) => {
  Post.find({ user: req.user._id }, (err, post) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(post);
  });
});


// update post ✅ 
postRouter.put("/:postId", (req, res, next) => {
  Post.findOneAndUpdate(
    { _id: req.params.postId },
    req.body,
    { new: true },
    (err, updatedPost) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedPost);
    }
    );
  });
  
  //   delete post ✅ 
  postRouter.delete("/:postId", (req, res, next) => {
    Post.findOneAndDelete(
      { _id: req.params.postId },
      (err, deletedPost) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        return res.status(200).send(`Successfully deleted ${deletedPost.caption}`);
      }
      );
    });
    
    
    module.exports = postRouter