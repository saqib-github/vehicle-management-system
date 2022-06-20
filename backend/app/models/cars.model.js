// sample model for the user profile

const mongoose = require("mongoose");

const Cars = mongoose.model(
  "Cars",
  new mongoose.Schema(
    {
      name: { type: String },
      model: { type: String },
      price: { type: Number },
      color: { type: String },
      make: { type: String },
      registeration: { type: String }
    },
    { timestamps: true }
  )
);

module.exports = Cars;
