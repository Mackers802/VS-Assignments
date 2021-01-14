const express = require("express")
const cameraRouter = express.Router()

const uuid = require("uuid").v4

const cameraData = [{
    brand: "Sony", 
    make: "A7III",
    price: "$1800",
    _id: uuid()
},
{
    brand: "Sony", 
    make: "A7C",
    price: "$1800",
    _id: uuid()
},
{
    brand: "Sony", 
    make: "A7RIII",
    price: "$2800",
    _id: uuid()
},
{
    brand: "Sony", 
    make: "A7RIV",
    price: "$3500",
    _id: uuid()
},
{
    brand: "Canon", 
    make: "EOS-RP",
    price: "$1000",
    _id: uuid()
},
{
    brand: "Canon", 
    make: "EOSR",
    price: "$1800",
    _id: uuid()
},
{
    brand: "Canon", 
    make: "EOSR-5",
    price: "$3900",
    _id: uuid()
},
{
    brand: "Nikon", 
    make: "Z5",
    price: "$1400",
    _id: uuid()
},
{
    brand: "Nikon", 
    make: "Z6",
    price: "$1600",
    _id: uuid()
},
{
    brand: "Nikon", 
    make: "Z6II",
    price: "$2000",
    _id: uuid()
}
]


// get All
cameraRouter.route("/")
.get((req,res) => {
    res.send(cameraData)
})
.post((req, res) => {
    const newCamera = req.body
    newCamera._id = uuid()
    cameraData.push(newCamera)
    res.send(`${newCamera} has been successfully added to the cameraData`)
})
// .put()
// .delete()



// get one
cameraRouter.get("/:cameraId", (req, res) => {
const cameraId = req.params.cameraId
const foundCamera = cameraData.find(camera => camera._id === cameraId)
res.send(foundCamera)
    // console.log(req.params.cameraId)
})

// get make
cameraRouter.get("/search/brand", (req, res) => {
    const brand = req.query.brand
    const filteredCamera = cameraData.filter(camera => camera.brand === brand)
    res.send(filteredCamera)
// console.log(req)
}
)

// cameraRouter.get("/", (req,res) => {
//     res.send(cameraData)
// })





module.exports=cameraRouter