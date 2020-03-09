const router = require('express').Router()

router.use('/auth', require('./auth'));
router.use('/pets', require('./pets'));
router.use('/associations', require('./associations'));



module.exports = router;