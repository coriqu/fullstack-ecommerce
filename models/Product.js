const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    name: String,
    description: String,
})

var Product = mongoose.model('products', productSchema);

module.exports = Product;