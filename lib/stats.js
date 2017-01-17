var pmx = require('pmx');

var refreshNetworkInfoMetrics = require('./stats/refreshNetworkInfoMetrics');
var refreshBlockCountMetrics = require('./stats/refreshBlockCountMetrics');
var refreshBlockchainInfoMetrics = require('./stats/refreshBlockchainInfoMetrics');
var refreshMiningInfoMetrics = require('./stats/refreshMiningInfoMetrics');
var refreshNetTotalsMetrics = require('./stats/refreshNetTotalsMetrics');
var refreshMemPoolInfoMetrics = require('./stats/refreshMemPoolInfoMetrics');
var refreshBitnodesMetrics = require('./stats/refreshBitnodesMetrics');
var refreshFeeMetrics = require('./stats/refreshFeeMetrics');
var refreshPriceMetrics = require('./stats/refreshPriceMetrics');
var refreshNumBtcMetrics = require('./stats/refreshNumBtcMetrics');
var refreshMarketSizeMetrics = require('./stats/refreshMarketSizeMetrics');

var metrics = {};
var probe = pmx.probe();

var REFRESH_RATE = 10000;

// Init metrics with default values
function initMetrics() {
  metrics.version = new probe.metric({
    name: 'Version',
    value: 'N/A'
  });

  metrics.subversion = new probe.metric({
    name: 'Subversion',
    value: 'N/A'
  });

  metrics.openConnections = new probe.metric({
    name: 'Open Connections',
    value: 'N/A'
  });

  metrics.blockCount = new probe.metric({
    name: 'Block Count',
    value: 'N/A'
  });

  metrics.network = new probe.metric({
    name: 'Network',
    value: 'N/A'
  });

  metrics.networkHashRate = new probe.metric({
    name: 'Network Hash Rate',
    value: 'N/A'
  });

  metrics.difficulty = new probe.metric({
    name: 'Difficulty',
    value: 'N/A'
  });

  metrics.lastBlockTransactions = new probe.metric({
    name: 'Transactions On Last Block',
    value: 'N/A'
  });

  metrics.bandwidthSent = new probe.metric({
    name: 'Bandwidth Sent',
    value: 'N/A'
  });

  metrics.bandwidthReceived = new probe.metric({
    name: 'Bandwidth Received',
    value: 'N/A'
  });

  metrics.bandwidthTotal = new probe.metric({
    name: 'Bandwidth Total',
    value: 'N/A'
  });

  metrics.transactions = new probe.metric({
    name: 'Transactions',
    value: 'N/A'
  });

  metrics.transactionsSize = new probe.metric({
    name: 'Transactions Size',
    value: 'N/A'
  });

  metrics.transactionsMemoryUsage = new probe.metric({
    name: 'Transactions Memory Usage',
    value: 'N/A'
  });

  metrics.rank = new probe.metric({
    name: 'Rank',
    value: 'N/A'
  });

  metrics.peerIndex = new probe.metric({
    name: 'Peer Index',
    value: 'N/A'
  });

  metrics.fastestFee = new probe.metric({
    name: 'Fastest Fee',
    value: 'N/A'
  });

  metrics.halfHourFee = new probe.metric({
    name: 'Half Hour Fee',
    value: 'N/A'
  });

  metrics.hourFee = new probe.metric({
    name: 'Hour Fee',
    value: 'N/A'
  });

  metrics.lastUSD = new probe.metric({
    name: 'Last Price USD',
    value: 'N/A'
  });

  metrics.lastEUR = new probe.metric({
    name: 'Last Price EUR',
    value: 'N/A'
  });

  metrics.totalBitcoins = new probe.metric({
    name: 'Total Bitcoin Number',
    value: 'N/A'
  });

  metrics.marketSize = new probe.metric({
    name: 'Total Market Size',
    value: 'N/A'
  });
}

// Refresh metrics
function refreshMetrics(bitcoinClient) {
  refreshNetworkInfoMetrics(metrics, bitcoinClient);
  refreshBlockCountMetrics(metrics, bitcoinClient);
  refreshBlockchainInfoMetrics(metrics, bitcoinClient);
  refreshMiningInfoMetrics(metrics, bitcoinClient);
  refreshNetTotalsMetrics(metrics, bitcoinClient);
  refreshMemPoolInfoMetrics(metrics, bitcoinClient);
  refreshBitnodesMetrics(metrics);
  refreshFeeMetrics(metrics);
  refreshPriceMetrics(metrics);
  refreshNumBtcMetrics(metrics);
  refreshMarketSizeMetrics(metrics);
}

function init(bitcoinClient) {
  initMetrics();
  setInterval(refreshMetrics.bind(this, bitcoinClient), REFRESH_RATE);
}

module.exports.init = init;