var User = require('../models/users')
const db = require('../db')
const md5 = require('md5')

module.exports.login = function(req,res){//page user
    res.render('auth/login')  // index :path, {} obj)
}
module.exports.postlogin = async function(req,res,next){
    var email = req.body.email
    var password = req.body.password
    // var user = db.get('users').find({'email': email}).value()
    var user = await User.find({email: email},(err)=> {
        if(err){
            res.render('auth/login',{
                errors: [
                    'Error email.!'
                ],values: req.body
            })
            return
        }
    })
  
    // if(!user){
    //     res.render('auth/login',{
    //         errors: [
    //             'Error email.!'
    //         ],
    //         values : req.body
    //     })
    //     return
    // }
    console.log(user[0])
    var hashMd5 = md5(password)
    if(user[0].password != hashMd5){
        res.render('auth/login',{
            errors: [
                'Error Pass.!'
            ],
            
            values : req.body
        })
        return
    }

    res.cookie('userId', user[0].id,{
        signed: true
    })
    res.redirect('/')
}
module.exports.logout = function(req, res) {
    req.logout()
    res.redirect('/')
}


module.exports.create = function(req,res){
    res.render('auth/create')
}
module.exports.postCreate = async function(req,res){
    // req.body.id = shortId.generate()
    // console.log(req.file.filename)
    // req.body.img = path + req.file.filename
    // req.body.img =req.file.path.split('\\').slice(1).join('/')
    // db.get('users').push(req.body).write()
    // res.redirect('/User')

    // req.body.img = path + req.file.filename
    req.body.image =req.file.path.split('\\').slice(1).join('/')
    var createUser ={
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: md5(req.body.password),
        image: req.file.path.split('\\').slice(1).join('/')
    }
    User.collection.save(createUser)
    res.redirect('/User')
}
module.exports.profile = function(req, res){
    
}