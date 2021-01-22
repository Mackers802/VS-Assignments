const mongoose = require("mongoose")
const Schema = mongoose.Schema


const inventorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    householdArea: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)