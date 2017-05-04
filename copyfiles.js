var copy = require('copy');

copy('./**/*.json', 'docs', function(err, file) {
  if (err) throw err;
  console.log('copied')
});