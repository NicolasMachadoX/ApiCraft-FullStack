const dotenv = require('dotenv').config();

const Server = require('./models/Server.js');

const server = new Server();

server.listen();