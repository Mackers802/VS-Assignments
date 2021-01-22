const express = require("express")
// const inventory = require("../models/inventory.js")
const crudRouter = express.Router()
const Inventory = require('../models/inventory.js')

crudRouter.use(express.json())

// get all
crudRouter.get("/", (req, res, next) => {
    Inventory.find( (err, item) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

// get one
crudRouter.get("/:itemId", (req, res, next) => {
    Inventory.find({householdArea: req.query.type}, (err, item) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

// post
crudRouter.post("/", (req, res, next) => {
    const newItem = new Inventory(req.body)
    newItem.save( (err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
    }
    return res.status(200).send(savedItem)
    })
})

// delete
crudRouter.delete("/:itemId", (req, res, next) => {
    Inventory.findOneAndDelete({_id: req.params.itemId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
    }
    return res.status(200).send("Item Has been deleted")
    })
})

// put/update

crudRouter.put("/:itemId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.itemId}, 
        req.body,
        {new: true},
        (err, updatedItem) =>{
            if(err){
                res.status(500)
                return next(err)
        }
        return res.status(200).send(updatedItem)
        }
    )
})


module.exports = crudRouter