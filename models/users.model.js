var mongooes = require('mongoose')
var bcrypt   = require('bcrypt-nodejs');

var userSchema = new mongooes.Schema({

        name: String,
        phone: String,
        email: String,
        password: String,
        image: String,
        role: String

})



var User = mongooes.model('User', userSchema, 'users') //users : collection
module.exports = User 