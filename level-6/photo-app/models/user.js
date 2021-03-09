const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: false,
    default: "",
  },
  bio: {
    type: String,
    required: false,
    default: "",
  },
  friends: {
    type: Array,
    required: true,
    default: [],
  },
  admin: {
    type: Boolean,
    required: false,
    default: false,
  },
  public: {
    type: Boolean,
    required: false,
    default: false,
  },
  business: {
    type: Boolean,
    required: false,
    defualt: false,
  },
  userPosts: {
    type: Array,
    required: false,
    default: [],
  },
});

module.exports = mongoose.model("User", userSchema);
