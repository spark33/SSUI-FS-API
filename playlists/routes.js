var express = require("express"),
		router = express.Router(),
		playlists = require('./model.js');

router.route('/')
  .get(playlists.getAllPlaylists)
  .post(playlists.createPlaylist);

router.post('/add-section', playlists.addPostSection);

module.exports = router;