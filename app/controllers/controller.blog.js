const Blog = require("../models/model.blog");
const Category = require("../models/model.category");
const User = require("../models/model.user");

exports.blog = async (req, res) => {
	try {
		const blogs = await Blog.find().populate(["category", "author"]);
		res.render("blogs/blog", { blogs });
	} catch (err) {
		console.log(err.message);
	}
};

exports.pageBlog = async (req, res) => {
	try {
		const categories = await Category.find();
		const users = await User.find();
		console.log(categories);
		res.render("blogs/pageBlog", { categories, users });
	} catch (err) {
		console.log(err.message);
	}
};

exports.store = async (req, res) => {
	try {
		req.body.slug = req.body.slug.toLowerCase().replace(/ /g, "-");
		const blog = new Blog(req.body);
		await blog.save();
		res.redirect("/blog");
	} catch (err) {
		console.log(err.message);
	}
};
