require(`dotenv`).config();
const mongoose = require('mongoose');
const Pet = require('../models/Pet.js');




const pet = [
  {
    img: 'https://source.unsplash.com/random?pug/800x450',
    name: 'Pistacho',
    age: Math.round(Math.random() * 7 + 2),
    sex: 'Macho',
    race: 'Carlino',
    weight: Math.round(Math.random() * 6 + 1),
    ppp: false,
    friendly: true,
    vet: 'Completo',
    location: 'Sevilla',
    assocId: '5e5eb0b20909f01c6acceea5'
    
  },

  {
    img: 'https://source.unsplash.com/random?pug/800x450',
    name: 'Jupiter',
    age: Math.round(Math.random() * 7 + 2),
    sex: 'Macho',
    race: 'Carlino',
    weight: Math.round(Math.random() * 6 + 1),
    ppp: false,
    friendly: true,
    vet: 'Completo',
    location: 'Sevilla',
    assocId: '5e5eb0b20909f01c6acceea5'
    
  },

  {
    img: 'https://source.unsplash.com/random?pug/800x450',
    name: 'Athena',
    age: Math.round(Math.random() * 7 + 2),
    sex: 'Hembra',
    race: 'Carlino',
    weight: Math.round(Math.random() *6 + 1),
    ppp: false,
    friendly: true,
    vet: 'Completo',
    location: 'Sevilla',
    assocId: '5e5eb0b20909f01c6acceea5'
    
  },

  {
    img: 'https://source.unsplash.com/random?pug/800x450',
    name: 'Pippi',
    age: Math.round(Math.random() * 7 + 2),
    sex: 'Hembra',
    race: 'Carlino',
    weight: Math.round(Math.random() *6 + 1),
    ppp: false,
    friendly: true,
    vet: 'Completo',
    location: 'Sevilla',
    assocId: '5e5eb0b20909f01c6acceea5'
    
  },

  {
    img: 'https://source.unsplash.com/random?retriever/800x450',
    name: 'Fendi',
    age: Math.round(Math.random() * 7 + 2),
    sex: 'Macho',
    race: 'Golden retriever',
    weight: Math.round(Math.random() *25 + 6),
    ppp: false,
    friendly: true,
    vet: 'Completo',
    location: 'Sevilla',
    assocId: '5e5eb0b20909f01c6acceea5'
    
  },

  {
    img: 'https://source.unsplash.com/random?retriever/800x450',
    name: 'Frosty',
    age: Math.round(Math.random() * 7 + 2),
    sex: 'Macho',
    race: 'Golden retriever',
    weight: Math.round(Math.random() *25 + 6),
    ppp: false,
    friendly: true,
    vet: 'Completo',
    location: 'Sevilla',
    assocId: '5e5eb0b20909f01c6acceea5'
    
  },

  {
    img: 'https://source.unsplash.com/random?retriever/800x450',
    name: 'Malibu',
    age: Math.round(Math.random() * 7 + 2),
    sex: 'Hembra',
    race: 'Golden retriever',
    weight: Math.round(Math.random() *15 + 6),
    ppp: false,
    friendly: true,
    vet: 'Completo',
    location: 'Sevilla',
    assocId: '5e5eb0b20909f01c6acceea5'
    
  },

  {
    img: 'https://source.unsplash.com/random?retriever/800x450',
    name: 'Vainilla',
    age: Math.round(Math.random() * 7 + 2),
    sex: 'Hembra',
    race: 'Golden retriever',
    weight: Math.round(Math.random() *15 + 6),
    ppp: false,
    friendly: true,
    vet: 'Completo',
    location: 'Sevilla',
    assocId: '5e5eb0b20909f01c6acceea5'
    
  },

  {
    img: 'https://source.unsplash.com/random?westie/800x450',
    name: 'floky',
    age: Math.round(Math.random() * 7 + 2),
    sex: 'Macho',
    race: 'Westie',
    weight: Math.round(Math.random() *6 + 1),
    ppp: false,
    friendly: true,
    vet: 'Completo',
    location: 'Sevilla',
    assocId: '5e5eb0b20909f01c6acceea5'
    
  },

  {
    img: 'https://source.unsplash.com/random?westie/800x450',
    name: 'Latte',
    age: Math.round(Math.random() * 7 + 2),
    sex: 'Macho',
    race: 'Westie',
    weight: Math.round(Math.random() *6 + 1),
    ppp: false,
    friendly: true,
    vet: 'Completo',
    location: 'Sevilla',
    assocId: '5e5eb0b20909f01c6acceea5'
    
  },

  {
    img: 'https://source.unsplash.com/random?westie/800x450',
    name: 'Anita',
    age: Math.round(Math.random() * 7 + 2),
    sex: 'Hembra',
    race: 'Westie',
    weight: Math.round(Math.random() *6 + 1),
    ppp: false,
    friendly: true,
    vet: 'Completo',
    location: 'Sevilla',
    assocId: '5e5eb0b20909f01c6acceea5'
    
  },

  {
    img: 'https://source.unsplash.com/random?westie/800x450',
    name: 'Maggie',
    age: Math.round(Math.random() * 7 + 2),
    sex: 'Hembra',
    race: 'Westie',
    weight: Math.round(Math.random() *6 + 1),
    ppp: false,
    friendly: true,
    vet: 'Completo',
    location: 'Sevilla',
    assocId: '5e5eb0b20909f01c6acceea5'
    
  },
];

mongoose
  .connect(process.env.DBURL, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

Pet.deleteMany()
  .then(() => {
    return Pet.create(pet);
  })
  .then(() => {
    console.log('succesfully added all the data');
    mongoose.connection.close();
    process.exit(0);
  });