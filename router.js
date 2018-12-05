var express = require("express"),
		router = express.Router();

router.use('/outfits', require('./outfits/routes'));
router.use('/features', require('./features/routes'));

module.exports = router;