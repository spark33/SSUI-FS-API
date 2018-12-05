var mongoose = require('mongoose');
mongoose.model('Feature', require('./schema.js'));
var Outfit = require('mongoose').model('Outfit');
var Feature = require('mongoose').model('Feature');

/*  "/features"
 *    POST: adds feature to selected outfits in outfits param to MLab
 */

exports.createFeature = function(req, res, next) {
  console.log(req.body);
  Outfit.findById(req.body.outfitId, function (err, outfit) {
    if (err) {
      next(err);
    } else {
      var feature = new Feature(req.body);
      feature.tags = req.body.tags.split(',');
      outfit.features.push(feature);
      outfit.save(function (err) {
        if (err) {
          next(err);
        } else {
          res.redirect(req.headers.origin + '/outfits/' + outfit._id);
        }
      });
    }
  });
}