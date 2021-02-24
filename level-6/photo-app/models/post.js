const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema ({
    user: { 
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true,
        default: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
    },
    style: {
        type: String,
        enumValues: ["Fashion" , "Portrait", "Car", "Wedding", "Landscape", "Street", "Macro", "Sports", "Travel", "Wildlife", "Aerial","Astro", "Food", "Photojournalism", "Underwater", "Architectural", "Night", "Pet", "Product", "Still Life", "Other"],
        required: true,
        default: ""
    },
    camera: {
        type: String,
        enumValues: ["Canon" , "Sony", "Nikon", "Fujifilm", "Olympus", "Panasonic", "Leica", "Hasselblad", "Iphone", "Android", "Other"],
        required: true,
        defualt: ""
    },
    lensBrand: {
        type: String,
        enumValues: ["Canon" , "Sony", "Nikon", "Fujifilm", "Olympus", "Panasonic", "Leica", "Hasselblad", "Iphone", "Android", "Other"],
        required: true,
        default: ""
    },
    lensFocalLength: {
        type: Number,
        required: false
        // default: 35
    },
    iso: {
        type: Number,
        required: false
        // default: 100
    },
    shutterSpeed: {
        type: Number,
        enumValues: [ 60 , 30 , 15 , 8 , 4, 2 , 1 , 1/2 , 1/4 , 1/8 , 1/15 , 1/30 , 1/60 , 1/125 , 1/250 , 1/500 , 1/1000 , 1/2000 , 1/4000 , 1/8000 ],
        required: false
        // default: 125
    },
    accessories: {
        type: String,
        required: false
        // default: ""
    },
    addLike: {
        type: Boolean,
        required: false
        // default: false
    },
    removeLike: {
        type: Boolean,
        required: false
        // default: false
    }
})



module.exports = mongoose.model("Post", postSchema)
