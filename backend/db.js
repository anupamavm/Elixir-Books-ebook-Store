const mongoose = require('mongoose');
// require('dotenv').config();
const connection = mongoose.connect(
	'mongodb+srv://mernToDo:mern123456@cluster0.b0xirmm.mongodb.net/?retryWrites=true&w=majority'
);

module.exports = { connection };
