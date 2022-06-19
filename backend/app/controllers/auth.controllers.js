const generator = require("generate-password");
const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const { sendEmail } = require("../middlewares/helpers");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  const { email } = req.body;
  const password = generator.generate({
    length: 10,
    numbers: true
  });
  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(password, 8)
  });
  await sendEmail(email, password);
  await user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!err) {
      res
        .status(200)
        .json({ message: "user registered sucessfully", password });
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email
  }).exec((err, user) => {
    if (err) {
      res.status(500).json({ message: err });
      return;
    }

    if (!user) {
      return res.status(404).json({ message: "User Not found." });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }

    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400 // 24 hours
    });

    res.status(200).send({
      accessToken: token
    });
  });
};
