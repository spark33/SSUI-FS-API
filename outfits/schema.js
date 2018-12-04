var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OutfitSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
  image: String,
  featured: Boolean,
  features: [{
    x: Number,
    y: Number,
    title: String,
    tags: [String],
    description: String
  }]
});

module.exports = OutfitSchema;