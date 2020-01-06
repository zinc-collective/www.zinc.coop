const ncp = require('ncp').ncp;
const ghpages = require('gh-pages');

ncp.limit = 16;

ncp('src', 'dist', function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('copy done!');
 ghpages.publish('dist', () => console.log('Publish complete'));
});


