const isValid = (schema, redirectTo) => (req, res, next) => {
	const { error } = schema.validate(req.body);
	if (error) {
		console.log(error);
		return error.message;
	}

	next();
};

module.exports = isValid;
