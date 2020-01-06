const ghpages = require('gh-pages');

module.exports = (directory) => {
  console.debug(`Publishing ${directory}`);
  ghpages.publish(directory,
                  { message: 'Published'},
                  () => console.info('Publish complete'));
}