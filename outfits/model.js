var mongoose = require('mongoose');
mongoose.model('Outfit', require('./schema.js'));
var Outfit = require('mongoose').model('Outfit');

/*  "/outfits"
 *    GET: finds all outfits
 *    POST: adds all outfits in outfits param to MLab
 */

exports.getAllOutfits = function(req, res, next) {
  Outfit.find(function (err, outfits) {
    if (err) {
      next(err);
    } else {
      let tagList = req.body.tagList;
      if(!tagList || tagList.length === 0) {
        res.json(outfits);
        return;
      } else {
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
      res.json(outfit);
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
