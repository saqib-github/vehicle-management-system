const express = require("express");

const controller = require("../controllers/cars.controllers");
const middlewares = require("../middlewares/authJWT");

const router = express.Router();

router.post("/create", [middlewares.authenticateToken], controller.create);
router.post("/update", [middlewares.authenticateToken], controller.update);
router.delete(
  "/delete/:_id",
  [middlewares.authenticateToken],
  controller.delete
);
router.get("/all", [middlewares.authenticateToken], controller.all);

module.exports = router;
