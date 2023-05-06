const isLoggedIn = (req, res, next) => {
	if (req.session.user) return next();
	else return res.render("login/login", { message: "login first" });
};

module.exports = isLoggedIn;
