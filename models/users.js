var mongooes = require('mongoose')

var userSchema = new mongooes.Schema({
    email: {
        type: String,
        required: true,
        unique:true,
        lowercase: true,
        validate: (value) =>{
            return validator.isEmail(value)
        }
    },
    password: String,
})
var User = mongooes.model('Users', userSchema, 'users')
module.exports = User