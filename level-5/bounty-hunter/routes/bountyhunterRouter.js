const express = require("express");
const bountyhunterRouter = express.Router()

bountyhunterRouter.use(express.json())

const uuid = require('uuid').v4

const bountys = [
  {
    firstName: "Darth",
    lastName: "Maul", 
    living: true,
    bountyAmount: "$200000000",
    type: "sith",
    _id: uuid(),
  },
  {
    firstName: "Darth",
    lastName: "Vader",
    living: true,
    bountyAmount: "$1000000000",
    type: "sith",
    _id: uuid(),
  },
  {
    firstName: "Luke",
    lastName: "Skywalker", 
    living: true,
    bountyAmount: "$10000000",
    type: "Jedi",
    _id: uuid(),
  },
  {
    firstName: "Yoda", 
    lastName: "Lay-he-ho",
    living: true,
    bountyAmount: "$5B0000000",
    type: "Jedi",
    _id: uuid(),
  },
  {
    firstName: "Princess",
    lastName: "Leia",
    living: true,
    bountyAmount: "$5000000000000000",
    type: "Jedi",
    _id: uuid(),
  },
  {
    firstName: "Sheev",
    lastName: "Palpatine",
    living: true,
    bountyAmount: "$200000000000000000",
    type: "sith",
    _id: uuid(),
  }
];

bountyhunterRouter.route("/")
.get((req, res) => {
    res.send(bountys);
  })
  .post((req, res) => {
    // console.log(req)
        const newBounty = req.body /* saving the request in a new obj*/
        bountys.push(newBounty)
        res.send(newBounty)
    })

    bountyhunterRouter.delete("/:bountyId", (req, res) => {
      const bountyId = req.params.bountysId /*grabbing the id */
      const bountyIndex = bountys.findIndex(bounty => bounty._id === bountyId) /*grabbing the index of the obj */
      bountys.splice(bountyIndex, 1) /* removing the item based on the index in the array */
      res.send("sucessfully deleted Bounty") /* sending respons msg */
    })

  bountyhunterRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId /*grabbing the id */
    const updateObject = req.body /*grabbing updates from request body*/
    const bountyIndex = bountys.findIndex(bounty => bounty._id === bountyId)/*grabbing  the index number in our array*/
    const updatedBounty = Object.assign(bountys[bountyIndex], updateObject)/*gcreating updated object */
    res.send(updatedBounty)
  }) 


module.exports = bountyhunterRouter 