const db = require("../models");
const Car = db.cars;
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
exports.ValidateEmail = mail => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

exports.sendEmail = async (email, password) => {
  const msg = {
    to: `${email}`, // Change to your recipient
    from: { name: "Vehicle Management System", email: "typeone354@gmail.com" }, // Change to your verified sender
    subject: "Vehicle Management System Username and Password",
    text: "and easy to do anywhere, even with Node.js",
    html: `<strong>You user name is: ${email} and password: ${password}</strong>`
  };
  return await sgMail
    .send(msg)
    .then(response => {
      console.log("Email sent successfully");
      return true;
    })
    .catch(error => {
      console.error(error);
      return false;
    });
};

// creating cars and returning _id
exports.createCar = async req => {
  const { name, model, price, color, make, registeration } = req.body;
  const car = new Car({ name, model, price, color, make, registeration });
  return await car
    .save()
    .then(result => {
      return result._id;
    })
    .catch(error => {
      return "";
    });
};
