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
module.exports.delete = function(req,res){
    var id = req.params.id
    User.findOneAndDelete({_id: id}, (err) =>{
        if(err) throw err
        console.log('delete ok')
        res.redirect('/User')
    })      
}
module.exports.edit = function(req,res){
    var id = req.params.id
    User.findOne({_id: id})
    .then((userId) =>{
        if(userId){
            res.render('users/editUser',{
                users: userId
            })
        }
    })
}
module.exports.update = function(req,res){
    var newUpdate ={
        name: req.body.name,
        phone: req.body.phone
    }
    User.findByIdAndUpdate(req.body.id, newUpdate,(err) =>{
        if(!err){
            res.redirect('/User')
        }
    })
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


