const router = require("express").Router();
const userController = require("../controllers/controller.user");
const isValid = require("../middlewares/middleware.isValid");
const registerSchema = require("../validators/validator.user");

router.get("/register", userController.registerPage);
router.post(
	"/register",
	isValid(registerSchema, "/register"),
	userController.register
);

module.exports = router;
