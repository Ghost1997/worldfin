const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.SMTP_AUTH,
    pass: process.env.SMTP_PASSWORD,
  },
});

exports.contact = async (req, res, next) => {
  res.render("contact", {
    pageTitle: "Contact",
    message: null,
  });
};

exports.contactUs = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const subject = req.body.subject;
  const message = req.body.message;
  const sendMail = await transporter.sendMail({
    to: process.env.MAIL,
    from: process.env.SMTP_AUTH,
    subject: "Worldfin Contact Us",
    html: `<p>Hello,</p><p>Worldfin Advisor PVT LTD </p><br><p>${name} is Trying to reachout to you </p><p>Name: ${name}<br>email: ${email}<br>phone: ${phone}<br>Subject: ${subject}<br>Message: ${message}</p><br><br><br></p><p>Regards</p><p>Team Worldfin</p>`,
  });
  res.render("contact", {
    pageTitle: "Contact",
    message: "Thanks We Will Get Back To You Shortly",
  });
};

exports.consultation = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const subject = req.body.subject;
  const message = req.body.message;
  const sendMail = await transporter.sendMail({
    to: process.env.MAIL,
    from: process.env.SMTP_AUTH,
    subject: "Worldfin Consultation",
    html: `<p>Hello,</p><p>Worldfin Advisor PVT LTD </p><br><p>${name} is Trying to reachout to you </p><p>Name: ${name}<br>email: ${email}<br>phone: ${phone}<br>Subject: ${subject}<br>Message: ${message}</p><br><br><br></p><p>Regards</p><p>Team Worldfin</p>`,
  });
  res.render("index", {
    message: "Thanks We Will Get Back To You Shortly",
  });
};
