var mongooes = require('mongoose')
var bcrypt   = require('bcrypt-nodejs');

var userSchema = new mongooes.Schema({

        email: {
                        type: String,
                        required: true,
                        unique: true,
                        lowercase: true,
                        validate: (value) => {
                                return validator.isEmail(value)
                        }

                },
        password: String,
        name: String,
        phone: String,
        image: String,
        role: String,

})
var User = mongooes.model('User', userSchema, 'users') //users : collection

module.exports = User 