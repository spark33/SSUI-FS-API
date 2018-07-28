var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var POSTS_COLLECTION = "posts";

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGO_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// POSTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/posts"
 *    GET: finds all posts
 *    POST: adds all posts in posts param to MLab
 */

app.get("/posts", function(req, res) {
});

app.post("/posts", function(req, res) {
  var newPost = req.body;
  newPost.createDate = new Date();

  if (!(req.body.title)) {
    handleError(res, "Invalid user input", "Must provide a title.", 400);
  }

  db.collection(POSTS_COLLECTION).insertOne(newPost, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new post.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});