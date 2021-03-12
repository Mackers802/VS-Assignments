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

// pre save encryption hook
userSchema.pre("save", function(next){
  const user = this
  if(!user.isModified("password")) return next()
  bcrypt.hash(user.password, 10, (err, hash) => {
    if(err) return next(err)
    user.password = hash
    next()
  })
})

// encrypted pass check
userSchema.methods.checkPassword = function(passwordAttempt, callback){
  bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
    if(err) return callback(err)
    return callback(null, isMatch)
  })
}

// removing password from frontend
userSchema.methods.withoutPassword = function(){
  const user = this.toObject()
  delete user.password
  return user
}

module.exports = mongoose.model("User", userSchema);
