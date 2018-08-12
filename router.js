var express = require("express"),
		router = express.Router();

router.use('/playlists', require('./playlists/routes'));
router.use('/posts', require('./posts/routes'));

module.exports = router;