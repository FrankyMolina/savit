require(`dotenv`).config();
const mongoose = require('mongoose');
const Association = require('../models/Association.js');


const association = [
  {
    name: 'Asociación protectora de Sevilla',
    tel: 622642988,
    location: 'Sevilla',
    
  },
  {
    name: 'Asociación protectora de Madrid',
    tel: 93041122,
    location: 'Madrid'
  }

];

mongoose
  .connect(process.env.DBURL, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

Association.deleteMany()
  .then(() => {
    return Association.create(association);
  })
  .then(() => {
    console.log('succesfully added all the data');
    mongoose.connection.close();
    process.exit(0);
  });