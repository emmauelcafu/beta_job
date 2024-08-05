const express = require("express");
const server = express();
const router = require("./routes/index")

// Middleware para la ruta principal
server.use("/", router);

module.exports = server;
