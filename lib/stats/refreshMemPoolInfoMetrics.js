var pmx = require('pmx');
var humanize = require('humanize');

module.exports = function refreshMemPoolInfoMetrics(metrics, bitcoinClient) {
  bitcoinClient.getMempoolInfo(function (err, results) {
    if (err) {
      return pmx.notify("getMemPoolInfo Error: " + err);
    }

    // Transaction Count
    metrics.transactions.set(results.size);

    // Total Transactions Size
    metrics.transactionsSize.set(humanize.filesize(results.bytes));

    // Transactions Memory Usage
    metrics.transactionsMemoryUsage.set(parseInt((results.usage / results.maxmempool) * 100) + " %");

  });
};