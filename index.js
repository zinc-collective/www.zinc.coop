const build = require('./lib/build');
const publish = require('./lib/publish');

build().then(publish)