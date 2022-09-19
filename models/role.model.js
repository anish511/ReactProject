const mongoose = require("mongoose");
const Role = mongoose.model(
  "fakeRole",
  new mongoose.Schema({
    name: String
  })
);
module.exports = Role;