var mongoose = require('mongoose');

mongoose.model('Post', require('./schema.js'));
var Post = require('mongoose').model('Post');

/*  "/posts"
 *    GET: finds all posts
 *    POST: adds all posts in posts param to MLab
 */

exports.getAllPosts = function(req, res, next) {
  Post.find(function (err, posts) {
    if (err) {
      next(err);
    } else {
      res.json(posts);
    }
  });
}

exports.createPost = function(req, res, next) {
  var post = new Post(req.body);
  post.save(function (err) {
    if (err) {
      next(err);
    } else {
      res.json(post);
    }
  });
}