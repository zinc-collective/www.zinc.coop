const ghpages = require('gh-pages');

module.exports = (directory) => (
  ghpages.publish(directory,
                  { message: 'Published'},
                  () => console.info('Publish complete'))
)