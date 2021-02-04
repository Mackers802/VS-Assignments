const express = require("express");
const bountyhunterRouter = express.Router()
const BountyTracker = require('../models/bountyTracker.js')

bountyhunterRouter.use(express.json())

// get all
bountyhunterRouter.get("/", (req, res, next) => {
  BountyTracker.find((err, bounty) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(bounty)
  })
})

// get one
bountyhunterRouter.get("/search/type", (req, res, next) => {
BountyTracker.find({type: req.query.type}, (err, bounty) => {
  if(err){
    res.status(500)
    return next(err)
  }
  return res.status(200).send(bounty)
})
})

// post
bountyhunterRouter.post("/", (req, res, next) => {
  const newBounty = new BountyTracker(req.body)
  newBounty.save((err, savedBounty) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedBounty)
  })
})

// delete
bountyhunterRouter.delete("/:bountyId", (req, res, next) => {
  BountyTracker.findOneAndDelete({_id: req.params.bountyId}, (err, deletedBounty) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`${deletedBounty.lastName} Bounty deleted`)
  })
})

// update
bountyhunterRouter.put("/:bountyId", (req, res, next) => {
  BountyTracker.findOneAndUpdate(
    {_id: req.params.bountyId}, 
    req.body /*.bountyAmount*/ ,
    {new : true},
    (err, updatedBounty) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedBounty)
    }
  )
})


module.exports = bountyhunterRouter 




