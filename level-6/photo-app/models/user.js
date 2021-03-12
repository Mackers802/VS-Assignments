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
    default: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c3Vuc2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  bio: {
    type: String,
    required: false,
    default: "Add something about yourself",
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
