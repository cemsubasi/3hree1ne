const mongoose = require("mongoose");
const env = require("../.env.json");

const {
	DB_NAME,
	DB_PASSWORD,
	DB_COLLECTION,
	MAIL_FROM,
	MAIL_TO,
	MAIL_PASSWORD,
	NODE_ENV,
	PORT,
} = env;

const ORIGIN =
	NODE_ENV === "production" ? "https://cemsu.me" : "http://localhost:8003";

const DB_URL = `mongodb+srv://${DB_NAME}:${DB_PASSWORD}@cluster0.zoi2e.mongodb.net/${DB_COLLECTION}?retryWrites=true&w=majority`;

const DB_OPT = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
};
const DB_CONNECT = mongoose
	.connect(DB_URL, DB_OPT)
	.then(() => {
		console.log(`server start on ${ORIGIN} and env is ${NODE_ENV}`);
		console.log("DB Connected");
	})
	.catch((err) => console.log("DB Connection Error", err));

const SESSION_OPT = {
	secret: "clyde",
	resave: true,
	saveUninitialized: true,
};

const INIT_URL = "/api";
const POST_URL = "/others";
const COMMENT_URL = "/comments";
const PHOTO_URL = "/photos";
const SUPER_URL = "/punchvenegro";

module.exports = {
	DB_CONNECT,
	PORT,
	ORIGIN,
	SESSION_OPT,
	INIT_URL,
	POST_URL,
	COMMENT_URL,
	PHOTO_URL,
	SUPER_URL,
	MAIL_FROM,
	MAIL_TO,
	MAIL_PASSWORD,
};
