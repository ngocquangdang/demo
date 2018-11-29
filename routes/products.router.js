const express = require('express')

const products = require('../controllers/products.controller')
var router = express.Router()

router.get('/', products.product)

module.exports = router