/**
 * Copyright 2016 Keymetrics Team. All rights reserved.
 * Use of this source code is governed by a license that
 * can be found in the LICENSE file.
 */

var pmx     = require('pmx');
var clientFactory = require('./lib/clientFactory.js');
var stats = require('./lib/stats.js');
//var actions = require('./lib/actions.js');

// Initialize the module
pmx.initModule({

    widget : {

      // Module display type. Currently only 'generic' is available
      type : 'generic',

      // Logo to be displayed on the top left block
      // Must be https
      logo : 'https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png',

      // 0 = main element
      // 1 = secondary
      // 2 = main border
      // 3 = secondary border
      // 4 = text color (not implemented yet)
      theme : ['#262E35', '#015A84', '#F79618', '#F79618'],

      // Toggle horizontal blocks above main widget
      el : {
        probes : true,
        actions: true
      },

      block : {
        // Display remote action block
        actions : false,

        // Display CPU / Memory
        cpu     : true,
        mem     : true,

        // Issues count display
        issues  : true,

        // Display meta block
        meta    : true,

        // Display metadata about the probe (restart nb, interpreter...)
        meta_block : false,

        // Name of custom metrics to be displayed as a "major metrics"
        main_probes : ['Network','Network Hash Rate','Block Count','Rank']
      },
    },

    // Status (in the future, not implemented yet)
    status_check : ['latency', 'event loop', 'query/s']
    //= Status Green / Yellow / Red (maybe for probes?)
  }, function(err, conf) {
  var bitcoinClient = clientFactory.build(conf);

  // Init metrics refresh loop
  stats.init(bitcoinClient);

  // Init actions
 // actions.init(bitcoinClient);
});
