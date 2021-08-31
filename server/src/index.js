const express = require("./initExpress");
const setRoutes = require("./setRoutes");
const initPassport = require("./initPassport");

const server = express();
initPassport(server);
setRoutes(server);
