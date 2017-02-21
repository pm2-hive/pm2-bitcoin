var pmx = require('pmx');
var request = require('request');

module.exports = function refreshMarketSizeMetrics(metrics) {
  request({
    url: "https://blockchain.info/q/marketcap",
    json: true
  }, function (err, response, body) {
    if (err) {
      return pmx.notify("refreshMarketSizeMetrics Error: " + err);
    }


    metrics.marketSize.set((body/(Math.pow(10, 9))).toFixed(2) + " B$");
  });
};