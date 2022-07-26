const passportRoute = require("./routes/passportRoute");
const { INIT_URL, POST_URL, COMMENT_URL, PHOTO_URL } = require("./config.js");
const initRoute = require("./routes/initRoute");
const postRoute = require("./routes/postRoute");
const commentRoute = require("./routes/commentRoute");
const photoRoute = require("./routes/photoRoute");

const setRoutes = (server) => {
	// server.use("/", (req, res, next) => {
	// 	console.log(req.url, req.body);
	// 	next();
	// });
	server.use("/", passportRoute);
	server.use(INIT_URL, initRoute);
	server.use(POST_URL, postRoute);
	server.use(COMMENT_URL, commentRoute);
	server.use(PHOTO_URL, photoRoute);

	server.use((req, res, next) => {
		res.status(403).send("not found!");
	});
};

module.exports = setRoutes;
