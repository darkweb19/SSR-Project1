const User = require("../models/model.user");
const bcrypt = require("bcrypt");

exports.loginPage = (req, res) => {
	res.render("login/login", { message: "sada" });
};

exports.attemptLogin = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			console.log("user not found in database");
			res.render("login/login", { message: "noUserFound" });
		}

		const checkPass = await bcrypt.compare(password, user.password);
		if (user && checkPass) {
			req.session.user = user;
			console.log("Login Successfull");
			res.redirect("/blog");
		} else {
			res.render("login/login", { message: "Password Wrong" });
		}
	} catch (err) {
		console.log(err);
		console.log(err.message);
	}
};
