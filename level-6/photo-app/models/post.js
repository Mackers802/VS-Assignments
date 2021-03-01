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
        required: true,
        default: ""
    },
    cameraBrand: {
        type: String,
        required: true,
        defualt: ""
    },
    cameraModel: {
        type: String,
        required: true,
        defualt: ""
    },
    lensBrand: {
        type: String,
        required: true,
        default: ""
    },
    lensModel: {
        type: String,
        required: true,
        default: ""
    },
    fStop: {
        type: String,
        enumValues: [ "1" , "1.1" , "1.2" , "1.4" , "1.6" , "1.8" , "2" , "2.2" , "2.4" , "2.8" , "3.2" , "3.5" , "4" , "4.5", "5" , "5.6" , "6.3" , "7.1" , "8" , "9" , "10" , "11" , "13" , "14", "16", "18", "20", "22", "32", "45" ],
        required: false,
        // default: 35
    },
    iso: {
        type: String,
        enumValues: [ "50" , "65" , "100" , "125" , "160" , "200" , "250" , "320" , "400" , "500" , "640" , "800" , "1000" , "1250", "1600" , "2000" , "2500" , "3200" , "4000" , "5000", "6400" , "8000" , "10000", "125000" ],
        required: false
        // default: 100
    },
    shutterSpeed: {
        type: String,
        enumValues: [ "60" , "30" , "15" , "8" , "4", "2" , "1" , "1/2" , "1/4" , "1/8" , "1/15" , "1/20", "1/25", "1/30" , "1/40", "1/50", "1/60" , "1/80", "1/100", "1/125" , "1/160", "1/200", "1/250" ,"1/320", "1/400", "1/500" , "1/640", "1/800", "1/1000" , "1/1250", "1/1600", "1/2000" , "1/2500", "1/3200", "1/4000" , "1/5000", "1/6400", "1/8000" ],
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
