const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema ({
    commentDescription: {
        type: String,
        required: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    },
    user: { 
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})



module.exports = mongoose.model("Comment", commentSchema)