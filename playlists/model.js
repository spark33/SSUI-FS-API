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

/*  "/playlists/add-section"
 *    POST: adds all playlists in playlists param to MLab
 */

// playlistId
// order
exports.addSection = function(req, res, next) {

  Playlist.findById(req.body.playlistId, function(err, playlist) {
    
    if(err) {
      next(err);
    } else {
      if(!req.body.order) {
        let err = new Error('Order not defined.');
        err.statusCode = 400;
        next(err);
        return;
      }
      var order = req.body.order;
      var ps = playlist.postSections;
      if(order > ps.length) {
        let err = new Error('Order is too large.');
        err.statusCode = 400;
        next(err);
        return;
      } else if(order != ps.length) {
        for(var i = 0; i < ps.length; i++) {
          if(ps[i].order == order) {
            let err = new Error('Post section with the order already exists.');
            err.statusCode = 400;
            next(err);
            return;
          }
        }
        ps.push({ order: order });
      }

      playlist.save(function(err) {
        if(err) {
          next(err);
        } else { 
          res.json(playlist);
        }
      });
    }

  })
}

// playlistId
// order
// postId
exports.updatePostInSection = function(req, res, next) {
  
}