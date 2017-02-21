var pmx = require('pmx');

module.exports = function refreshBlockchainInfoMetrics(metrics, bitcoinClient) {
  bitcoinClient.getBlockchainInfo(function (err, results) {
    if (err) {
      return pmx.notify("getBlockchainInfo Error: " + err);
    }

    // Network
    metrics.network.set(results.chain + "net");
  });
};