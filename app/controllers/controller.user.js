const User = require("../models/model.user");
const sendMail = require("../configs/config.mail");

exports.registerPage = (req, res) => {
	res.render("client/register");
};

exports.index = async (req, res) => {
	const user = await User.find();
	res.render("lists", { user });
};

exports.register = async (req, res) => {
	try {
		const user = new User(req.body);
		await user.save();
		const msg = ` Dear ${user.name},
            <br>
            <br>
            Welcome to Blog.
            <br>
            Birthday Party Dede
            <br>
            <br>
            Thanks,
		`;
		// await sendMail(user.email, "Welcome To Blog", msg);
		res.render("login/login", { message: "thanks" });
	} catch (err) {
		console.log(err.message);
	}
};
