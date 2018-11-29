const express = require('express')
var multer  = require('multer')

const controllers = require('../controllers/book.controller')

var upload = multer({ dest: './public/img/' })
var router = express.Router()

router.get('/', controllers.createBook)
router.post('/createBook', upload.single('img'), controllers.postCreatebook)


module.exports = router