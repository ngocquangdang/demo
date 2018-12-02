const db = require('../db')
var User = require('../models/users.model')

module.exports.requireAuth = function(req,res,next){
    if(!req.signedCookies.userId){
        res.redirect('/login')
        
    }
    //var user = db.get('users').find({id: req.signedCookies.userId}).value()
    var user = User.findOne({id: req.signedCookies.userId})
    if(!user){
        res.redirect('/login')
       
    }
    res.locals.user = user
    next()
}