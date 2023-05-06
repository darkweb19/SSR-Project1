const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
	name: { type: String, requried: true, unique: true },
});

module.exports = mongoose.model("Category", categorySchema);
