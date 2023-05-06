const router = require("express").Router();
const userController = require("../controllers/controller.user");

router.get("/user", userController.index);
module.exports = router;
