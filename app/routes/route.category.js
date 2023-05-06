const router = require("express").Router();
const categoryController = require("../controllers/controller.category");

router.get("/category/create", categoryController.page);
router.get("/category/:id/delete", categoryController.delete);
router.get("/category/:id/edit", categoryController.edit);
router.post("/category/:id/edit", categoryController.updateCategory);
router
	.route("/category")
	.post(categoryController.store)
	.get(categoryController.category);
module.exports = router;
