var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: { type: String },
  type: { type: String }, // todo: add enum
  source: { type: String }, // todo: add enum
  playlistId: Schema.Types.ObjectId,
  description: { type: String },
  content: { type: String },
  image: { type: String },
  lastUpdated: { type: Date, default: Date.now },
  timeEstimate: { type: Number, default: 0, min: 0 },
});

module.exports = PostSchema;