const express = require("express");
const app = express();
const session = require("express-session");
app.set("view engine", "ejs");
app.set("views", "app/views");
app.use(express.urlencoded({ extended: true }));
//using session
app.use(
	session({
		secret: "secret",
		saveUninitialized: true,
		resave: false,
		cookie: { secure: false, httpOnly: true },
	})
);

//local user
app.use((req, res, next) => {
	res.locals.user = req.session.user;
	next();
});

//database
require("./app/configs/config.db");

//router
app.use(require("./app/routes/route.register"));
app.use(require("./app/routes/route.login"));
app.use(require("./app/routes/route.client"));

//middleware for logged in
app.use(require("./app/middlewares/middleware.isLoggedIn"));
app.use(require("./app/routes/route.user"));
app.use(require("./app/routes/route.category"));
app.use(require("./app/routes/route.blog"));

//server starts here
app.listen(3000, () => {
	console.log("Server Started at port ");
});

// to add : gives a message of not begin logged in
//also adding the success or failure of logged in information
//spliting and  changing slug information in database :
//adding search feature in slug
//adding image in blog
