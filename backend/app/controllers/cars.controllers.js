const db = require("../models");
const Car = db.cars;
const User = db.user;

const { createCar } = require("../middlewares/helpers");
// creating car
exports.create = async (req, res) => {
  const { name, model, price, color, make, registeration } = req.body;
  if (
    typeof name !== "string" ||
    typeof model !== "string" ||
    typeof price !== "number" ||
    typeof color !== "string" ||
    typeof registeration !== "string"
  ) {
    res.status(500).send({ message: "your data in invalid" });
    return;
  }
  const _id = await createCar(req);
  const { userId } = req.body;
  User.findOneAndUpdate(
    { _id: userId },
    {
      $push: {
        vehicles: _id
      }
    }
  )
    .then(result => {
      res.status(200).json({ message: "Success", data: result });
    })
    .catch(error => {
      res.status(500).json({ message: "Failed" });
    });
};

// deleting car
exports.delete = (req, res) => {
  const { _id } = req.params;
  if (typeof _id !== "string") {
    res.status(500).send({ message: "your _id is invalid" });
    return;
  }
  Car.findByIdAndDelete(_id).then(result => {
    res.status(200).json({ message: "Success", data: result }).catch(error => {
      res.status(500).json({ message: "Failed" });
    });
  });
};

// updating car
exports.update = (req, res) => {
  const { _id } = req.body;
  if (typeof _id !== "string") {
    res.status(500).send({ message: "your _id is invalid" });
    return;
  }
  Car.findOneAndUpdate(
    { _id: _id },
    {
      ...req.body
    }
  )
    .then(result => {
      res.status(200).json({ message: "Success", data: result });
    })
    .catch(error => {
      res.status(500).json({ message: "Failed" });
    });
};

// getting all cars
exports.all = (req, res) => {
  const { userId } = req.params;
  User.find({ _id: userId })
    .populate({ path: "vehicles" })
    .then(result => {
      res.status(200).json({ message: "Success", data: result });
    })
    .catch(error => {
      res.status(500).json({ message: "Failed" });
    });
};
