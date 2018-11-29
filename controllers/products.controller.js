// const db = require('../db')
var Product = require('../models/products.model')
module.exports.product = async function(req,res){
    var page = parseInt(req.query.page) || 1
    var perPage= 4

    var start = (page -1)*perPage
    var end = page.perPage
    //-- use db.json
    
    // res.render('products/product',{
    //     // products: db.get('products').value().slice(start,end)
    //     products: db.get('products').drop(start).take(perPage).value()
    // })

    //-- use db.json


    var product = await Product.find()
    res.render('products/product',{
        products: product
    })
  
}