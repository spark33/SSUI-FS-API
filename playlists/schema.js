var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSectionSchema = new Schema({
  description: { 
    type: String,
    default: "New Post Section"
  },
  order: { 
    type: Number, 
    default: 0, 
    min: 0 
  },
  posts: [{
    // denormalized from Post schema
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
    }
  }]
});

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
    type: [PostSectionSchema]
  },
  last_updated: { 
    type: Date, 
    default: Date.now 
  },
});

module.exports = PlaylistSchema;