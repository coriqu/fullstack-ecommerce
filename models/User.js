const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false }
})

var User = mongoose.model('users', userSchema);

module.exports = User;