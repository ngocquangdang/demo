const express = require('express')
var multer  = require('multer')

const controllers = require('../controllers/users.controller')
const validate = require('../validate/users.validate')

var upload = multer({ dest: './public/uploads/' })
var router = express.Router()


router.get('/', controllers.index)

// router.get('/cookie',controllers.cookie)

router.get('/search', controllers.search)

router.get('/create', controllers.create)

router.get('/:id', controllers.viewUserbyId)

router.post('/create',upload.single('img'), validate.postCreate, controllers.postCreate)


module.exports = router