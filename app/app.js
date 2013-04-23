var fs = require('fs');

// Globals
global.config = JSON.parse(fs.readFileSync('./../config/config.json'));
global.config.awsConfig = JSON.parse(fs.readFileSync('./../config/aws.json'));
global.config.dashboardPort = 3030;


// App modules
var server = require('./server/server.js');
var watcher = require('./watch/watcher.js');
var sync = require('./sync/sync.js');


// Run watcher
watcher.watch();


// Run sync listener
sync.listen();


// Run the dashboard server
// server.run();