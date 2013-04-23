var newFile = require('./new_file.js');
var _ = require('underscore');

handleFileNew = _.debounce(function(file){
  if (file)
    newFile.listener(file);
}, 100);

function syncListen() {
  process.on('file:new', handleFileNew);
}

exports.listen = syncListen;