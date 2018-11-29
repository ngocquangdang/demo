var mongooes = require('mongoose')

var productSchema = new mongooes.Schema({
    name: String,
    description: String,
    image: String,
})
var Product = mongooes.model('Product', productSchema, 'products') //products : collection
module.exports = Product 