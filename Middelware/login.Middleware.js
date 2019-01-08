const db = require('../db')
var User = require('../models/users.model')

module.exports.requireAuth =async function(req,res,next){
    if(!req.signedCookies.userId){
        res.redirect('/login')
        next()
    }
    // var user = db.get('users').find({id: req.signedCookies.userId}).value()
    var user = await User.findById(req.signedCookies.userId)
    
    if(!user){
        res.redirect('/login')
        next()
    }
    // res.locals.user = user
   next()
}
module.exports.role =async  function(req,res,next){

    var user =await  User.findById(req.signedCookies.userId)
    // console.log(user.role)
    if(user.role !== 'a'){
        res.redirect('/profile')
    }
    next()
}
module.exports.checkUser = async function(req,res, next){
    var user = await User.findById(req.signedCookies.userId)
    res.locals.user = user
    next()
}