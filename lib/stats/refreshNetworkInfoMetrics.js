var pmx = require('pmx');

module.exports = function refreshBackendMetrics(metrics, bitcoinClient) {
  bitcoinClient.getNetworkInfo(function (err, results) {
    if (err) {
      return pmx.notify("getNetworkInfo Error: " + err);
    }

    // Version
    metrics.version.set(results.version);

    // Subversion
    metrics.subversion.set(results.subversion);

    // Open Connections
    metrics.openConnections.set(results.connections);
  });
};