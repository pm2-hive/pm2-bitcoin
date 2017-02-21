var pmx = require('pmx');

module.exports = function refreshMiningInfoMetrics(metrics, bitcoinClient) {
  bitcoinClient.getMiningInfo(function (err, results) {
    if (err) {
      return pmx.notify("GetMiningInfo Error: " + err);
    }

    // Network Hash Rate
    metrics.networkHashRate.set((results.networkhashps / Math.pow(10, 12)).toFixed(2) + "Th/s");

    // Difficulty
    metrics.difficulty.set(parseInt(results.difficulty));

    // Total transactions on last block
    metrics.lastBlockTransactions.set(parseInt(results.currentblocktx));
  });
};