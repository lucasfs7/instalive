module.exports = function(match) {
  match('', 'home#index');
  match(':hashtag', 'gallery#index');
};
