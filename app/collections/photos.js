var Photo = require('../models/photo');
var Base = require('./base');

module.exports = Base.extend({
  model: Photo,
  url: function() {
    return '/tags/:hashtag/media/recent?access_token=6342485.f59def8.ccbe5efec33b42ae81047565a0dec26b';
  },
  parse: function(response) {
    return response.data;
  }
});
module.exports.id = 'Photos';
