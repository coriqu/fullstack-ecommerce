const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
	id: String,
    email: String,
    password: String
})

var User = mongoose.model('users', userSchema);

module.exports = User;