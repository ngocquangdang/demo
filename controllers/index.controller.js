var Book = require('../models/books.model')

module.exports.index = async function(req, res, next){
    var books = await Book.find().limit(10)
    res.render('index',{
        book : books
    }) 
}
module.exports.viewBookbyId =async function(req, res, next){
    var id = req.params.id
    
    await Book.findById(id)
    .then((bookId) => {
        if(bookId){
            res.render('products/chitiet',{
                book: bookId
            })
            console.log(book)
        } else {
            console.log("no data exist for this id");
        }
    })
}
module.exports.searchBook =async function (req, res, next){
    var q= req.query.q

    await Book.find({name: new RegExp(  q,  "i")})
    .then((searchBook) => {
        if(searchBook){
            res.render('listviews/listBooks',{
                book: searchBook
            })
        }
    })
}
module.exports.listBook = async function(req, res, next){
    var books = await Book.find()
    res.render('listviews/listBooks',{
        book: books
    })
}
module.exports.pagination = function(req, res){
    var perPage = 10
    var page = req.params.page || 1
    // var books = await Book.find()
    Book
        .find()
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec( function(err, books) {
             Book.count().exec(function(err, count) {
                if (err) return next(err)
                
                res.render('listviews/listBooks', {
                    book: books,
                    current: page,
                    pages: Math.ceil(count / perPage)
                })
            })
        })
}
