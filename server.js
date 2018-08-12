var express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    mongodb = require("mongodb"),
    router = express.Router();

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var app = express();

app.use(express.static(__dirname + "/public"));

//rest API requirements
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var PlaylistSchema = new Schema({
  title: { type: String }
});

mongoose.model('Playlist', PlaylistSchema);
var Playlist = require('mongoose').model('Playlist');

/*  "/playlists"
 *    GET: finds all playlists
 *    POST: adds all playlists in playlists param to MLab
 */

var getAllPlaylists = function(req, res, next) {
  Playlist.find(function (err, playlists) {
    if (err) {
      next(err);
    } else {
      res.json(playlists);
    }
  });
}

var createPlaylist = function(req, res, next) {

  var playlist = new Playlist(req.body);

  playlist.save(function (err) {
    if (err) {
      next(err);
    } else {
      res.json(playlist);
    }
  });
}

router.route('/playlists')
  .get(getAllPlaylists)
  .post(createPlaylist);

app.use('/', router);

mongoose.connect(process.env.MONGO_URI);
// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});