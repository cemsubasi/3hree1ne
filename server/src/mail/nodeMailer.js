const nodemailer = require("nodemailer");
const { MAIL_FROM, MAIL_TO, MAIL_PASSWORD } = require("../config");

const mailer = (arg) => {
	var transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: MAIL_FROM,
			pass: MAIL_PASSWORD,
		},
	});

	var mailOptions = {
		from: MAIL_FROM,
		to: MAIL_TO,
		subject: "Comment",
		text: arg,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};

module.exports = mailer;
