var express = require("express"),
		router = express.Router(),
		playlists = require('./playlists.js');

router.route('/playlists')
  .get(playlists.getAllPlaylists)
  .post(playlists.createPlaylist);

module.exports = router;