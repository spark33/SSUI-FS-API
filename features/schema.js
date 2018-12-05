var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FeatureSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
  x: Number,
  y: Number,
  link: String
});

module.exports = FeatureSchema;