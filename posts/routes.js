var express = require("express"),
		router = express.Router(),
		posts = require('./model.js');

router.route('/')
  .get(posts.getAllPosts)
  .post(posts.createPost);

module.exports = router;