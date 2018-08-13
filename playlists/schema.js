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
    lastUpdated: { 
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
  titleText: { 
    type: String
  },
  bannerImage: {  // image path
    type: String 
  },
  description: { 
    type: String 
  },
  postCount: { 
    type: Number, 
    default: 0, 
    min: 0,
    // ensure value is integer
    get: v => Math.round(v),
    set: v => Math.round(v),
  },
  timeEstimate: { 
    type: Number, 
    default: 0, 
    min: 0,
    // ensure value is integer
    get: v => Math.round(v),
    set: v => Math.round(v),
  },
  postSections: {
    type: [PostSectionSchema]
  },
  lastUpdated: { 
    type: Date, 
    default: Date.now 
  },
});

module.exports = PlaylistSchema;