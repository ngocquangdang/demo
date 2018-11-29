var mongooes = require('mongoose')

var productSchema = new mongooes.Schema({
    name: String,
    price: String,
    description: String,
    image: String,
})
var Book = mongooes.model('Book', productSchema, 'books') //products : collection
module.exports = Book 