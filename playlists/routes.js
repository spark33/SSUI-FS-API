var express = require("express"),
		router = express.Router(),
		playlists = require('./model.js');

router.route('/')
  .get(playlists.getAllPlaylists)
  .post(playlists.createPlaylist);

router.post('/add_section', playlists.addSection);

module.exports = router;