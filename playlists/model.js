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

exports.addSection = function(req, res, next) {
  var playlist = findPlaylist(req.body.playlist_id);
  if(playlist) {
    var description = req.body.description;
    var order = req.body.order;
    if(order == playlist.post_sections.length) {
      playlist.post_sections.push({})
    }
  }
}

exports.updatePostInSection = function(req, res, next) {
  var playlist = findPlaylist(req.body.playlist_id);
  if(playlist) {
    var post_id = req.body.post_id;
    var order = req.body.order;
  }
}