const express = require('express');
const server = express();

require('dotenv').config();
const port = process.env.PORT;

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

server.use('*', (req, res) => {
	res.send('<h1>Hello, Heroku!</h1>');
});