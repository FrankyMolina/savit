const express = require('express');
const router = express.Router();
const Pet = require('../../models/Pet');


router.get('/', (req, res, next) => {
    Pet.find()
        .then(allPets => res.json(allPets))
        .catch(err => console.log(err))
})

router.get('/:id', (req, res, next) => {
    Pet.findById(req.params.id)
      .then(singlePet => res.json(singlePet))
      .catch(err => console.log(err))
  })



module.exports = router;