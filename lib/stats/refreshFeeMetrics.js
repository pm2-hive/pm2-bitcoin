var pmx = require('pmx');
var request = require('request');

module.exports = function refreshFeeMetrics(metrics) {
  request({
    url: "https://bitcoinfees.21.co/api/v1/fees/recommended",
    json: true
  }, function (err, response, body) {
    if (err) {
      return pmx.notify("refreshFeeMetrics Error: " + err);
    }

    // Fastest Fee
    metrics.fastestFee.set(body.fastestFee);

    // Half Hour Fee Index
    metrics.halfHourFee.set(body.halfHourFee);

    // Hour Fee Index
    metrics.hourFee.set(body.hourFee);
  });
};