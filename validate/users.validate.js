module.exports.postCreate = function(req,res,next){
    var errors = []
    if(!req.body.name){
        errors.push('Error Name')
    }
    if(!req.body.phone){
        errors.push('Error Phone')
    }
    if(errors.length){
        res.render('users/create',{
            errors: errors,
            value: req.body    
        })
        return
    }
    next()
}