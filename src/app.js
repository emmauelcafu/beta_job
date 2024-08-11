const express = require('express');
const server = express();
const router = require('./routes/index');

server.use(express.json()); // Middleware para parsear JSON
server.use('/', router);   // Configurar las rutas principales

module.exports = server;

