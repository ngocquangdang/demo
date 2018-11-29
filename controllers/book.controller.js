var Book = require('../models/books.model')

module.exports.createBook = function(req,res){
    res.render('users/createBook')
}
module.exports.postCreatebook = async function(req,res){
    req.body.image = '/' + req.file.path.split('\\').slice(1).join('/')
    Book.collection.save( req.body)
    res.redirect('/')
}
