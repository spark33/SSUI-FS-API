var express = require("express"),
		router = express.Router();

router.use('/playlists', require('./playlists/routes'));

module.exports = router;