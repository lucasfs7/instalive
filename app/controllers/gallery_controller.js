module.exports = {
  index: function(params, callback) {
    var spec = {
      collection: {
        collection: 'Photos',
        params: params
      }
    };

    this.app.fetch(spec, function(err, result) {
      callback(err, result);
    });
  }
};
