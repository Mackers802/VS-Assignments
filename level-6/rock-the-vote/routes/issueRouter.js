const express = require("express");
const issueRouter = express.Router();
const Issue = require("../models/issue.js");

// Get all Issues
issueRouter.get("/", (req, res, next) => {
  Issue.find((err, issue) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(issue);
  });
});

// Post issue
issueRouter.post("/", (req, res, next) => {
  req.body.user = req.user._id;
  const newIssue = new Issue(req.body);
  newIssue.save((err, savedIssue) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedIssue);
  });
});

// get issue by user
issueRouter.get("/user", (req, res, next) => {
  Issue.find({ user: req.user._id }, (err, issue) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(issue);
  });
});

// get one issue

issueRouter.get("/:issueId", (req, res, next) => {
  Issue.find({ _id: req.params.issueId }, (err, issue) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(issue);
  });
});

// Delete issue - * maybe only Admins *
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.issueId, user: req.user._id },
    (err, deletedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res
        .status(200)
        .send(`Successfully delete todo: ${deletedIssue.title}`);
    }
  );
});

// Upvote
issueRouter.put("/:issueId/upvote", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId },
    { $inc: { votes: 1 } },
    // { new: true },
    (err, updatedIssue) => {
      if (err) {
        req.status(500);
        return next(err);
      }
      return res.status(200).send(updatedIssue);
    }
  );
});

// downvote
issueRouter.put("/:issueId/downvote", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId },
    { $inc: { votes: -1 } },
    // { new: true },
    (err, updatedIssue) => {
      if (err) {
        req.status(500);
        return next(err);
      }
      return res.status(200).send(updatedIssue);
    }
  );
});

// downvote
issueRouter.put("/:issueId/downvote", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId },
    (err, updatedIssue) => {
      if (err) {
        req.status(500);
        return next(err);
      } else if (downVoted.includes({_id: req.params.userId})) {
        Issue.findOneAndUpdate(
          { issueId: req.params.issueId },
          { $inc: { votes: -1 } }
          );
        } 
        else if(!downVoted.includes({user: req.params.userId})){
          Issue.findOneAndUpdate(
            {_id: req.params.issueId},
            {user: req.body},
            {new : true },
        )
      } else

      return res.status(200).send(updatedIssue);
    }
  );
});

module.exports = issueRouter;
