const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const port = process.env.PORT || 4000;

// Root route
server.get('/', (req, res) => res.send('Hello, world!'))

module.exports = server