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

  // get all posts by userId ✅ 
postRouter.get("/:user", (req, res, next) => {
  Post.find(
    { user: req.user._id }, (err, posts) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(posts);
  }
  );
})

  // add post ✅ 
  postRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id;
    req.body.username = req.user.username
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

    // get posts by Style ✅ 
    postRouter.get(`/search/style`, (req, res, next) => {
      Post.find({style: req.query.style}, (err, posts) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(posts)
      })
      })

       // / get posts by cameraBrand ✅ 
  postRouter.get("/search/cameraBrand", (req, res, next) => {
    Post.find({cameraBrand: req.query.cameraBrand}, (err, posts) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(posts)
    })
    })

      // / get posts by cameraModel ✅ 
  postRouter.get("/search/cameraModel", (req, res, next) => {
    Post.find({cameraModel: req.query.cameraModel}, (err, posts) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(posts)
    })
    })

      // / get posts by lens ✅ 
      postRouter.get("/search/lensBrand", (req, res, next) => {
        Post.find({lensBrand: req.query.lensBrand}, (err, posts) => {
          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(200).send(posts)
        })
        })

        // / get posts by lensModel ✅ 
      postRouter.get("/search/lensModel", (req, res, next) => {
        Post.find({lensModel: req.query.lensModel}, (err, posts) => {
          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(200).send(posts)
        })
        })

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
      { _id: req.params.postId,
        user: req.user._id },
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