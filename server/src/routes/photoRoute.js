const express = require("express");
const Photos = require("../models/photos");
const photoRoute = express.Router();

photoRoute
  .route("/")
  .post((req, res) => {
    const photo = new Photos({
      data_url: req.body.data_url,
      file: req.body.file,
      category: req.body.category,
			title: req.body.title,
      date: req.body.date,
    });
    photo
      .save()
			.then(() => res.status(201).send(photo))
      .catch((err) => res.status(404).send(err));
  })
  .get((req, res) => {
    Photos.find()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => res.status((404).send(err)));
  });

module.exports = photoRoute;
