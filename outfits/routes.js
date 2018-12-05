var express = require("express"),
		router = express.Router(),
		outfits = require('./model.js');

router.route('/')
  .get(outfits.getAllOutfits)
  .post(outfits.createOutfit);

router.route('/:id')
	.get(outfits.getOutfit);

module.exports = router;