const Category = require("../models/model.category");

exports.page = (req, res) => {
	res.render("category/categoryPage");
};

exports.store = async (req, res) => {
	try {
		const category = new Category(req.body);
		await category.save();
		res.redirect("/category");
	} catch (error) {
		console.log(error.message);
	}
};

exports.category = async (req, res) => {
	try {
		const categories = await Category.find();
		res.render("category/category", { categories });
	} catch (err) {
		console.log(err.message);
	}
};

exports.delete = async (req, res) => {
	try {
		await Category.findByIdAndDelete(req.params.id);
		res.redirect("/category");
	} catch (err) {
		console.log(err.message);
	}
};

exports.edit = async (req, res) => {
	try {
		const category = await Category.findById(req.params.id);
		res.render("category/prevCategory", { category });
	} catch (err) {
		console.log(err.message);
	}
};

exports.updateCategory = async (req, res) => {
	try {
		await Category.findByIdAndUpdate(req.params.id, {
			name: req.body.category,
		});
		res.redirect("/category");
	} catch (error) {
		console.log(error.message);
	}
};
