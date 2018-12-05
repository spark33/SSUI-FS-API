var mongoose = require('mongoose');
mongoose.model('Outfit', require('./schema.js'));
var Outfit = require('mongoose').model('Outfit');

/*  "/outfits"
 *    GET: finds all outfits with queried tags
 *    POST: adds all outfits in outfits param to MLab
 */

exports.getAllOutfits = function(req, res, next) {
  console.log(req.query);
  Outfit.find(function (err, outfits) {
    if (err) {
      next(err);
    } else {
      if(!req.query.tags || req.query.tags.length === 0) {
        res.json(outfits);
        return;
      } else {
        let tagList = req.query.tags.split(',');
        let results = [];
        tagList.forEach(function(tag) {
          results = results.concat(outfits.filter(o => o.tags.indexOf(tag) >= 0));
        });
        outfits = [...new Set(results)];
        res.json(outfits);
      }
    }
  });
}

exports.createOutfit = function(req, res, next) {
  var outfit = new Outfit(req.body);
  outfit.save(function (err) {
    if (err) {
      next(err);
    } else {
      res.redirect(req.headers.origin + '/outfits/' + outfit._id);
      // res.json(outfit);
    }
  });
}

/*  "/outfits/:id"
 *    GET: finds outfit with that ID
 */

 exports.getOutfit = function(req, res, next) {
  Outfit.findById(req.params.id, function (err, outfits) {
    if (err) {
      next(err);
    } else {
      res.json(outfits);
    }
  });
}
