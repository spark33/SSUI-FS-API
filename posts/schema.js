var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: { type: String },
  type: { type: String }, // todo: add enum
  source: { type: String }, // todo: add enum
  playlist_id: Schema.Types.ObjectId,
  description: { type: String },
  content: { type: String },
  image: { type: String },
  last_updated: { type: Date, default: Date.now },
  time_estimate: { type: Number, default: 0, min: 0 },
});

module.exports = PostSchema;