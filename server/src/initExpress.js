const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");

const { DB_CONNECT, HTTPPORT, ORIGIN, SESSION_OPT } = require("./config");

const initExpress = () => {
	const server = express();

	server.use(cors({ origin: ORIGIN, credentials: true }));
	server.use(session(SESSION_OPT));
	server.use(bodyParser.json({ limit: "10mb" }));
	server.use(cookieParser());

	server.listen(HTTPPORT, DB_CONNECT);
	return server;
};
module.exports = initExpress;
