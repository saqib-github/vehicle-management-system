const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const { ValidateEmail } = require("./helpers");

const db = require("../models/index");
// const faker = require("faker");
const User = db.user;

exports.verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ message: "Unauthorized!", isAuthenticated: false });
    }
    // res.status(200).json({ message: "Success", isAuthenticated: true });
    req.userId = decoded.id;
    next();
  });
};
exports.duplicateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!ValidateEmail(email)){
    res.status(404).json({ message: "please enter valid email" });
  }
    User.findOne({
      email: email
    }).exec((err, user) => {
      if (err) {
        res.status(500).json({ message: err });
      }
      if (user) {
        res.status(404).json({ message: "user has already registered" });
      } else {
        next();
      }
    });
};

exports.authenticateUserUsingToken = (req, res) => {
  let token = req.headers["x-access-token"];
  // console.log("headers", req.headers);

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ message: "Unauthorized!", isAuthenticated: false });
    }
    res.status(200).json({ message: "Success", isAuthenticated: true });
    // req.userId = decoded.id;
  });
};
exports.authenticateToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  // console.log("headers", req.headers);

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ message: "Unauthorized!", isAuthenticated: false });
    }
    next();
  });
};