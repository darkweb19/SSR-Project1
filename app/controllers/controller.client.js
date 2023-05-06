const Blog = require("../models/model.blog");

exports.client = async (req, res) => {
	try {
		const blogs = await Blog.find().populate(["category", "author"]);
		res.render("client/homePage", { blogs });
	} catch (err) {
		console.log(err.message);
	}
};
