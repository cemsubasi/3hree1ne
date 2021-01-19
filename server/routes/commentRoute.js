const express = require("express");
const Blog = require("../models/posts");
const commentRoute = express.Router();
const mailer = require("../mail/nodeMailer");

commentRoute.route("/").put((req, res) => {
  mailer(`Merhaba sahip, gonderine yeni bir yorum yapildi. 
			${req.body.comment.userName}: ${req.body.comment.userComment} 
			${req.body.comment.date}
			${req.headers.host}`);
  Blog.findOneAndUpdate(
    { postUrl: req.body.postUrl },
    { $push: { comments: req.body.comment } }
  )
    .then((result) => res.status(202).send(result))
    .catch((err) => res.status(402).send(err));
});

module.exports = commentRoute;
