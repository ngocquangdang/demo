var mongooes = require('mongoose')
var bcrypt   = require('bcrypt-nodejs');

var userSchema = new mongooes.Schema({

        email: String,
        password: String,
        name: String,
        phone: String,
        image: String,
        role: String,

})
var User = mongooes.model('User', userSchema, 'users') //users : collection

module.exports = User 