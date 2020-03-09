const express = require('express');
const router = express.Router();
const Association = require('../../models/Association');

router.get('/', (req, res, next) => {
  Association.find()
    .then(allAssociations => res.json(allAssociations))
    .catch(err => console.log(err));
});

router.get('/:id', (req, res, next) => {
  Association.findById(req.params.id)
    .then(singleAssociation => res.json(singleAssociation))
    .catch(err => console.log(err));
});

module.exports = router;
