var pmx = require('pmx');

module.exports = function refreshBlockCountMetrics(metrics, bitcoinClient) {
  bitcoinClient.getBlockCount(function (err, results) {
    if (err) {
      return pmx.notify("getBlockCount Error: " + err);
    }

    // Block Count
    metrics.blockCount.set(results);
  });
};