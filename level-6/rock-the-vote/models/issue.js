const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  added: {
    type: Date,
    // required: true,
  },
  voted: { 
    type: [Schema.Types.ObjectId],
    ref: "User",
    required: true
  },
  notVoted: {
    type: [Schema.Types.ObjectId],
    ref: "User",
    required: true
  },
  votes: {
    type: Number,
    default: 0
    },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Issue", issueSchema);
