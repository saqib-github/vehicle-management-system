// sample model for the user profile

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      email: { type: String, required: true },
      password: { type: String, required: true },
      vehicles: [{ type: Schema.Types.ObjectId, ref: "Cars" }]
    },
    { timestamps: true }
  )
);

module.exports = User;
