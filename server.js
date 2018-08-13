var express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    mongodb = require("mongodb"),
    router = require("./router.js"),
    mongoose = require('mongoose');

var app = express();

app.use(express.static(__dirname + "/public"));

//rest API requirements
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/', router);

app.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500; // Sets a generic server error status code if none is part of the err
  res.status(err.statusCode).send(err.message); // Send err data
});

mongoose.connect(process.env.MONGO_URI);
// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});