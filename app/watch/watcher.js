var watch = require('watch');

function watcherWatch(){
  watch.watchTree(config.destination, function (f, curr, prev) {
    if (typeof f == "object" && prev === null && curr === null) {
      // Finished walking the tree 
    } else if (prev === null) {
      // f is a new file

      process.emit('file:new', f);

    } else if (curr.nlink === 0) {
      // f was removed
    } else {
      // f was changed
    }
  });
};

exports.watch = watcherWatch;