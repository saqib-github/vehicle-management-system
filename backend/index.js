const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");
const mongoose = require("mongoose");
require("dotenv/config");

// importing routes here
const authRoute = require("./app/routes/auth.routes");
const carRoute = require("./app/routes/cars.routes")


// creating app
const app = express();

// app middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// this will run when anyone request on app
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Vehicle Management Sysytem" });
});

// routes middlewares'
app.use("/api/auth", authRoute);
app.use("/api/car", carRoute);

// importing models
const db = require("./app/models");
// connecting to database
db.mongoose
  .connect(`${process.env.MONGODB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully Connected to database");
    // initial();
  })
  .catch((err) => {
    console.log("Failed to connect to database", err);
    process.exit();
  });

// set port and listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is runing on ${PORT}`);
});
