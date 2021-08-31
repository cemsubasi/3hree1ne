const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dbSchema = new Schema({
	id: {
		type: String,
		require: true,
	},
	thumbnail: {
		type: String,
		require: true,
	},
	postUrl: {
		type: String,
		require: true,
		unique: true,
	},
	postHeader: {
		type: String,
		require: true,
	},
	postBody: {
		type: String,
		require: true,
	},
	author: {
		type: String,
		require: true,
	},
	category: {
		type: String,
		require: true,
	},
	featured: {
		type: Boolean,
		require: true,
	},
	comments: {
		type: Array,
		require: true,
	},
	date: {
		type: String,
		require: true,
	},
});

const Blog = mongoose.model("Posts", dbSchema);
module.exports = Blog;
