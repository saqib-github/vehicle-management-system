// sample model for the user profile

const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    vehicles: [],
  })
);

module.exports = User;
