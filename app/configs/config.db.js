const mongoose = require("mongoose");

function connectDB() {
	try {
		mongoose.connect("mongodb://localhost:27017/Scratch");
		console.log("Database connected");
	} catch (err) {
		console.log(err.message);
	}
}

connectDB();
