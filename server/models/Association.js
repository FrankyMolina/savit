const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const associationSchema = new Schema({
  name: String,
  tel: Number,
  location: { type: String, enum: ['Madrid', 'Sevilla', 'Cádiz'] },
  pets: [],

  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Association = mongoose.model('Association', associationSchema);
module.exports = Association;