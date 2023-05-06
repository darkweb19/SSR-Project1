const router = require("express").Router();
const clientController = require("../controllers/controller.client");
router.route("/").get(clientController.client);

module.exports = router;
