var express = require("express"),
		router = express.Router();

router.use('/outfits', require('./outfits/routes'));

module.exports = router;