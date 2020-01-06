const ncp = require('ncp').ncp;
ncp.limit = 16;

module.exports = () => new Promise((resolve, reject) => {
  console.debug('Beginning build')
  ncp('src', 'dist', function (err) {
    if (err) { reject(err); }
    console.debug('Build complete')
    resolve('dist');
  })
})