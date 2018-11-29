const express = require('express')

const controllers = require('../controllers/index.controller')
var router = express.Router()

router.get('/', controllers.index)

// router.get('/book', controllers.listBook)
router.get('/book/:page', controllers.pagination)
router.get('/search', controllers.searchBook)
router.get('/:id', controllers.viewBookbyId)





module.exports = router
