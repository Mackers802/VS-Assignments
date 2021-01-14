// const express = require("express");
// const app = express();

const uuid = require('uuid').v4

const bountys = [
  {
    firstName: "Darth",
    lastName: "Maul", 
    living: true,
    bountyAmount: "$20M",
    type: "sith",
    _id: uuid(),
  },
  {
    firstName: "Darth",
    lastName: "Vader",
    living: true,
    bountyAmount: "$10M",
    type: "sith",
    _id: uuid(),
  },
  {
    firstName: "Luke",
    lastName: "Skywalker", 
    living: true,
    bountyAmount: "$10M",
    type: "Jedi",
    _id: uuid(),
  },
  {
    firstName: "Yoda",
    lastName: "Lay-he-ho",
    living: true,
    bountyAmount: "$5B",
    type: "Jedi",
    _id: uuid(),
  },
  {
    firstName: "Princess",
    lastName: "Leia",
    living: true,
    bountyAmount: "$500k",
    type: "Jedi",
    _id: uuid(),
  },
  {
    firstName: "Sheev",
    lastName: "Palpatine",
    living: true,
    bountyAmount: "$200k",
    type: "sith",
    _id: uuid(),
  },
];

// app.listen(9000, () => {
//   console.log("this server is running on 4000");
// });

// app.use(express.json())

app.get("/bounty", (req, res) => {
  res.send(bountys);
});

app.post("/bounty", (req, res) => {
    const newBounty = req.body
    bountys.push(newBounty)
    res.send(`${newBounty.firstName} HAS BEEN ADDED TO BOUNTY LIST`)
})