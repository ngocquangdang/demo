var User = require('../models/users.model')


const shortId = require('shortid')
const db = require('../db')


module.exports.index = async function(req,res){//page user
    // res.render('users/index',{
    //     users : db.get('users').value()
    // })  // index :path, {} obj)

    var user = await User.find()
    res.render('users/index',{
        users: user
    })
}
module.exports.search = function(req,res){//page search'''
    var q= req.query.q
    //-- use db.json

    // var searchUser = db.get('users').value().filter(function(user){
    //     return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    // })

    //-- use db.json

    User.find({name: new RegExp(q,"i")}) 
    .then((searchUser) => {
        if (searchUser) {
            res.render('users/index',{
                users: searchUser
            })
        //  console.log(userId);
        } 
        // else {
        //   console.log("no data exist for this id");
        // }
     })
}
module.exports.create = function(req,res){
    // console.log(req.cookies)

    res.render('users/create')
}
module.exports.viewUserbyId =  function(req,res){
    var id = req.params.id       //route para
    //-- use db.json
    // var user = db.get('users').find({id: id}).value()
    //-- use db.json

    User.findOne({_id:id})
    .then((userId) => {
        if (userId) {
            res.render('users/view',{
                users: userId
            })
          console.log(userId);
        } else {
          console.log("no data exist for this id");
        }
     })
 
}
module.exports.postCreate = async function(req,res){
    // req.body.id = shortId.generate()
    // console.log(req.file.filename)
    // var path = 'uploads\\'
    // req.body.img = path + req.file.filename
    // req.body.img =req.file.path.split('\\').slice(1).join('/')
    // db.get('users').push(req.body).write()
    // res.redirect('/User')

    // req.body.img = path + req.file.filename
    req.body.image =req.file.path.split('\\').slice(1).join('/')

    // var user = await User.find()
    User.collection.save(req.body)
    res.redirect('/User')
}



