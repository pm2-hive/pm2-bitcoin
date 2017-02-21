var pmx = require('pmx');
var request = require('request');

module.exports = function refreshPriceMetrics(metrics) {
  request({
    url: "https://blockchain.info/ticker",
    json: true
  }, function (err, response, body) {
    if (err) {
      return pmx.notify("refreshPriceMetrics Error: " + err);
    }

    // Last USD
    if (body.USD) {
      metrics.lastUSD.set(body.USD.last + " $");
    }

    // Last EUR
    if (body.EUR) {
      metrics.lastEUR.set(body.EUR.last + " €");
    }
  });
};