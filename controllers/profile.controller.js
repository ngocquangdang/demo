const User = require('../models/users.model')
module.exports.profile = async function(req,res){
    var user = await User.findById(req.signedCookies.userId)
    res.render('auth/profile',{
        users: user
    });
}

