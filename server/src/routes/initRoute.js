const express = require("express");
const Blog = require("../models/posts");
const initRoute = express.Router();

initRoute.get("/", (req, res) => {
  Blog.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => res.status(404).send(err));
});

module.exports = initRoute;
