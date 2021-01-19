const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require("express-session");
const mongoose = require("mongoose");
const { DB_URL, PORT } = require("./data.js");

mongoose
  .connect(process.env.MONGODB_URI || DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to mongo"))
  .catch((err) => console.log(err));

const initExpress = () => {
  const server = express();
  server.use(cors());
  server.use(express.json({ limit: "50mb" }));
  server.use(bodyParser.json());
  server.use(cookieParser());
  server.use(
    session({
      secret: "clyde",
      resave: true,
      saveUninitialized: true,
    })
  );

  server.listen(process.env.PORT || PORT);
  return server;
};
module.exports = initExpress;
