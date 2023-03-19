const express = require('express');
const mongoose = require('mongoose');

const port = 3001;
const connection = mongoose.connect(
	'mongodb+srv://mernToDo:mern123456@cluster0.b0xirmm.mongodb.net/?retryWrites=true&w=majority'
);

// creating the app
const app = express();

app.listen(port, async () => {
	try {
		// here the connection should be from db.js
		await connection;
		console.log('conneted to db');
	} catch (error) {
		// console log the errors
		console.log(error);
	}

	console.log('Server is started on port number', port);
});
