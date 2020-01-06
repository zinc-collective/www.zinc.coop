const ncp = require('ncp').ncp;
ncp.limit = 16;

module.exports = () => new Promise((resolve, reject) => {
  ncp('src', 'dist', function (err) {
    if (err) { reject(err); }
    console.info('Build complete')
    resolve('dist');
  })
})