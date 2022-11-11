const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "israelnwangwu08@gmail.com",
    pass: "djrqitiruafblbzj",
  },
});

const options = {
  from: "nwangwuisrael@gmail.com",
  to: "nwangwujeremy@gmail.com",
  subject: "sending email with node",
  text: "That's simple. I will use this with supabase",
};

transporter.sendMail(options, function (err, info) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Sent " + info.response);
});
