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
      console.log(response[0].statusCode);
      console.log(response[0].headers);
      return true;
    })
    .catch(error => {
      console.error(error);
      return false;
    });
};
