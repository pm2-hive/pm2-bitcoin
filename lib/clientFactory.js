var Client = require('bitcoin-core');
var pmx = require('pmx');

function build(conf) {
  var client = new Client({
    network: conf.network,
    host: conf.host,
    username: conf.username,
    password: conf.password,
  });

  return client;
}

module.exports.build = build;