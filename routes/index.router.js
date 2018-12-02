const express = require('express')

const indexs = require('../controllers/index.controller')
const logins = require('../controllers/login.controller')
var router = express.Router()

router.get('/', indexs.index)
router.get('/login', logins.login)
router.post('/login', logins.postlogin)
// router.get('/book', index.listBook)
router.get('/book/:page', indexs.pagination)
router.get('/search', indexs.searchBook)
router.get('/:id', indexs.viewBookbyId)





module.exports = router
