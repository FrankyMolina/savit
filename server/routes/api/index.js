const router = require('express').Router()

router.use('/auth', require('./auth'));
//router.use('/bichitos',require())

// router.use('/pets', require('./pets'));

module.exports = router;