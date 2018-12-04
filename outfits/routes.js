var express = require("express"),
		router = express.Router(),
		outfits = require('./model.js');

router.route('/')
  .get(outfits.getAllOutfits)
  .post(outfits.createOutfit);

module.exports = router;