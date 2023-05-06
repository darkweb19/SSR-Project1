const router = require("express").Router();
const blogController = require("../controllers/controller.blog");

router.get("/blog", blogController.blog);
router.get("/blog/create", blogController.pageBlog);
router.post("/blog", blogController.store);

module.exports = router;
