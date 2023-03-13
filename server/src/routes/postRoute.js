const express = require("express");
const Blog = require("../models/posts");
const postRoute = express.Router();

postRoute
	.route("/")
	.post((req, res) => {
		const blog = new Blog({
			id: req.body.id,
			thumbnail: req.body.thumbnail,
			postUrl: req.body.postUrl,
			postHeader: req.body.postHeader,
			postBody: req.body.postBody,
			author: req.body.author,
			category: req.body.category,
			featured: req.body.featured,
			isActive: req.body.isActive,
			comments: req.body.comments,
			date: req.body.date,
		});
		blog
			.save()
			.then(() => res.status(201).send(blog))
			.catch((err) => {
				console.log(req.body);
				res.status(404).send(err);
			});
	})
	.delete((req, res) => {
		Blog.findOneAndRemove({ postUrl: req.body.postUrl })
			.then((result) => res.status(202).send(result))
			.catch((err) => {
				res.status(404).send(err);
			});
	})
	.put((req, res) => {
		Blog.findOneAndUpdate(
			{ postUrl: req.body.postUrl },
			{ featured: req.body.featured }
		)
			.then((result) => res.status(202).send(result))
			.catch((err) => {
				res.status(404).send(err);
			});
	});
postRoute.route("/activation").put((req, res) => {
	Blog.findOneAndUpdate(
		{ postUrl: req.body.postUrl },
		{ isActive: req.body.isActive }
	)
		.then((result) => res.status(202).send(result))
		.catch((err) => {
			res.status(404).send(err);
		});
});
postRoute.route("/edit").put((req, res) => {
	Blog.findOneAndUpdate(
		{ postUrl: req.body.postUrl },
		{
			postHeader: req.body.postHeader,
			postBody: req.body.postBody,
			author: req.body.author,
			category: req.body.category,
			thumbnail: req.body.thumbnail,
		}
	)
		.then((result) => res.status(202).send(result))
		.catch((err) => {
			res.status(402).send(err);
		});
});

module.exports = postRoute;
