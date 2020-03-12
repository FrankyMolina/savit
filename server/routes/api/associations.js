const express = require('express');
const router = express.Router();

const Association = require('../../models/Association');
const Pet = require('../../models/Pet');

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

router.post('/new', (req, res, next) => {
  let newAssoc = {
    name: req.body.name,
    tel: req.body.tel,
    location: req.body.location,
    owner: req.user._id
  };
  Association.create(newAssoc)
    .then(theAssociation => res.json(theAssociation))
    .catch(err => console.log(err));
});

router.post('/:id/new-pet', (req, res, next) => {
  let newPet = {
    img: req.body.img,
    name: req.body.name,
    age: req.body.age,
    sex: req.body.sex,
    race: req.body.race,
    weight: req.body.weight,
    ppp: req.body.ppp, //*boolean
    friendly: req.body.friendly, //*boolean
    vet: req.body.vet,
    location: req.body.location,
    assocId: req.params.id
  };

  console.log(newPet);

  Pet.create(newPet)
    .then(createPet => res.json(createPet))
    .catch(err => console.log(err));
});

module.exports = router;
