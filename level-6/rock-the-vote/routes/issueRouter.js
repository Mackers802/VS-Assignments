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

// get one issue
issueRouter.get("/:issueId", (req, res, next) => {
  Issue.find({_id: req.query._id}, (err, issue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issue)
  })
})

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

module.exports = issueRouter;
