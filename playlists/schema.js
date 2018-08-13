var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlaylistSchema = new Schema({
  title: { 
    type: String, 
    required: true, 
    unique: true 
  },
  title_text: { 
    type: String
  },
  banner_image: {  // image path
    type: String 
  },
  description: { 
    type: String 
  },
  post_count: { 
    type: Number, 
    default: 0, 
    min: 0,
    // ensure value is integer
    get: v => Math.round(v),
    set: v => Math.round(v),
  },
  time_estimate: { 
    type: Number, 
    default: 0, 
    min: 0,
    // ensure value is integer
    get: v => Math.round(v),
    set: v => Math.round(v),
  },
  post_sections: {
    description: { 
      type: String 
    },
    order: { 
      type: Number, 
      default: 0, 
      min: 0 
    },
    posts: [{ // denormalized from Post schema
      post_id: Schema.Types.ObjectId,
      type: { 
        type: String 
      }, // todo: add enum
      image: { 
        type: String 
      },
      description: { 
        type: String 
      },
      source: { 
        type: String 
      }, // todo: add enum
      last_updated: { 
        type: Date, 
        default: Date.now 
      },
    }]
  },
  last_updated: { 
    type: Date, 
    default: Date.now 
  },
});

module.exports = PlaylistSchema;