const express = require('express')

const controllers = require('../controllers/users.controller')

var router = express.Router()


router.get('/', controllers.index)

// router.get('/cookie',controllers.cookie)

router.get('/search', controllers.search)

router.get('/:id', controllers.viewUserbyId)
router.get('/delete/:id', controllers.delete)
// router.get('/edit/:id', controllers.edit)
router.get('/update', controllers.update)



module.exports = router