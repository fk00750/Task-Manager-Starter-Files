const mongoose = require("mongoose");

const UserSchema = new mongoose({
  username: {
    type: String,
    required: [true, "Please Provide Username"],
    unique: [true, "Username is not available"],
  },
  email: {
    type: String,
    required: [true, "Please Provide Email"],
    unique: [true, "Email is already Taken"],
  },
  hash: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
