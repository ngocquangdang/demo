const db = require('../db')
var shortId = require('shortid')
var User = require('../models/users.model')

module.exports = function(req,res,next){
    if(!req.signedCookies.sessionId){
        var sessionId =shortId.generate()
        res.cookie('sessionId', sessionId,{
            signed: true
        })
        // User.collection.save(req.body.id)
        db.get('sessions').push({
            id: sessionId
        }).write()
    }
    next()
}