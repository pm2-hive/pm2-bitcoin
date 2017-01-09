var pmx = require('pmx');
var request = require('request');

module.exports = function refreshBitnodesMetrics(metrics) {
  var nodeAddress = pmx.getConf().nodeAddress;
  var nodePort = pmx.getConf().nodePort;

  if (nodeAddress && nodePort) {
    request({
      url: "https://bitnodes.21.co/api/v1/nodes/leaderboard/" + nodeAddress + "-" + nodePort,
      json: true
    }, function (err, response, body) {
      if (err) {
        return pmx.notify("refreshBitnodesMetrics Error: " + err);
      }

      // Rank
      metrics.rank.set(body.rank);

      // Peer Index
      metrics.peerIndex.set(body.peer_index);
    });
  }
};