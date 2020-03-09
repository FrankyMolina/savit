const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const petSchema = new Schema({
    img: {type: String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEi8UoKJRwPPL7DsErLaUS0_9JBJK8JJLUru8FWpLjrGkGj515'},
    name: String,
    age: Number,
    sex: {type: String, enum: ['Macho', 'Hembra']},
    race: String,
    weight: Number,
    ppp: Boolean,
    friendly: Boolean,
    vet: String,
    location: String,
    assocId: {type: Schema.Types.ObjectId, ref: 'Association'}
    
  



}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}
);

const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet;