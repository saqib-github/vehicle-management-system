const express = require("express");


const controller = require("../controllers/auth.controllers");
const middlewares = require("../middlewares/authJWT");

const router = express.Router();

router.post("/signup", [middlewares.duplicateEmail], controller.signup);
router.post("/signin", controller.signin);
router.post("/authenticate-user", middlewares.authenticateUserUsingToken);

module.exports = router;
