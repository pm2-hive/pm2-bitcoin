var pmx = require('pmx');
var request = require('request');

module.exports = function refreshNumBtcMetrics(metrics) {
  request({
    url: "https://blockchain.info/q/totalbc",
    json: true
  }, function (err, response, body) {
    if (err) {
      return pmx.notify("refreshNumBtcMetrics Error: " + err);
    }


    metrics.totalBitcoins.set(body/(Math.pow(10, 8))); // convert from satoshi to bitcoins
  });
};