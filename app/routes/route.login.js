const loginController = require("../controllers/controller.login");
const router = require("express").Router();

router.get("/login", loginController.loginPage);
router.post("/login", loginController.attemptLogin);

module.exports = router;
