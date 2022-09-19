const mongoose = require("mongoose");
const User = mongoose.model(
  "fakeUser",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "fakeRole"
      }
    ]
  })
);
module.exports = User;