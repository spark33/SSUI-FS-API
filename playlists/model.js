var mongoose = require('mongoose');
mongoose.model('Playlist', require('./schema.js'));
var Playlist = require('mongoose').model('Playlist');

/*  "/playlists"
 *    GET: finds all playlists
 *    POST: adds all playlists in playlists param to MLab
 */

exports.getAllPlaylists = function(req, res, next) {
  Playlist.find(function (err, playlists) {
    if (err) {
      next(err);
    } else {
      res.json(playlists);
    }
  });
}

exports.createPlaylist = function(req, res, next) {
  var playlist = new Playlist(req.body);
  playlist.save(function (err) {
    if (err) {
      next(err);
    } else {
      res.json(playlist);
    }
  });
}