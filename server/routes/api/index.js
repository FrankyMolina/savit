const router = require('express').Router()

router.use('/auth', require('./auth'));
router.use('/pets', require('./pets'))

// router.use('/pets', require('./pets'));

module.exports = router;