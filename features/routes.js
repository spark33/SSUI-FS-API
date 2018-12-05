var express = require("express"),
		router = express.Router(),
		features = require('./model.js');

router.route('/')
  .post(features.createFeature);

module.exports = router;