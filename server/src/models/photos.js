const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dbSchema = new Schema({
	data_url: {
		type: String,
		require: true,
	},
	file: {
		type: Object,
		require: true,
	},
	date: {
		type: String,
		require: true,
	},
	title: {
		type: String,
		require: true,
	},
	category: {
		type: String,
		require: true,
	},
});

const Photos = mongoose.model("Photos", dbSchema);
module.exports = Photos;
