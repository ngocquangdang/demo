const express = require('express')
var multer  = require('multer')

const indexs = require('../controllers/index.controller')
const logins = require('../controllers/login.controller')
const validate = require('../validate/users.validate')
var upload = multer({ dest: './public/uploads/' })

var router = express.Router()

router.get('/', indexs.index)
// ---user
router.get('/login', logins.login)
router.post('/login', logins.postlogin)
router.get('/logout', logins.logout)
router.get('/create', logins.create)
router.post('/create', upload.single('img'), validate.postCreate, logins.postCreate)
// ---user

//---Book
// router.get('/book', indexs.listBook)
router.get('/book:page', indexs.pagination)
router.get('/search', indexs.searchBook)
router.get('/:id', indexs.viewBookbyId)
//---Book

module.exports = router
