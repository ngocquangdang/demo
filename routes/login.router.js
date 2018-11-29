const express = require('express')

const controllers = require('../controllers/login.controller')
var router = express.Router()

router.get('/login', controllers.login)
router.post('/login', controllers.postlogin)

module.exports = router