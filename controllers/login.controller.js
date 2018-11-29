const db = require('../db')
const md5 = require('md5')

module.exports.login = function(req,res){//page user
    res.render('auth/login')  // index :path, {} obj)
}
module.exports.postlogin = function(req,res,next){
    var email = req.body.email
    var password = req.body.password

    var user = db.get('users').find({'email': email}).value()
    
    if(!user){
        res.render('auth/login',{
            errors: [
                'Error email.!'
            ],
            values : req.body
        })
        return
    }
    var hashMd5 = md5(password)
    if(user.password != hashMd5){
        res.render('auth/login',{
            errors: [
                'Error Pass.!'
            ],
            
            values : req.body
        })
        return
    }
    res.cookie('userId', user.id,{
        signed: true
    })
    res.redirect('/')
}