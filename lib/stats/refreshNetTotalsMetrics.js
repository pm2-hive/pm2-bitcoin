var pmx = require('pmx');
var humanize = require('humanize');

module.exports = function refreshNetTotalsMetrics(metrics, bitcoinClient) {
  bitcoinClient.getNetTotals(function (err, results) {
    if (err) {
      return pmx.notify("getNetTotals Error: " + err);
    }

    // Bandwidth Sent
    metrics.bandwidthSent.set(humanize.filesize(results.totalbytessent));

    // Bandwidth Received
    metrics.bandwidthReceived.set(humanize.filesize(results.totalbytesrecv));

    // Bandwidth Total
    metrics.bandwidthTotal.set(humanize.filesize(results.totalbytesrecv + results.totalbytessent));
  });
};