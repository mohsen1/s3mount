s3 = require('./s3_client').s3;
var fs = require('fs');

function newFile(file){
  var fileS3Path = file.substring(global.config.destination.length);
  fs.stat(file, function(err, stat){
    if (err) throw err;

    console.log('started uploading file: ' + file);
    var req = client.put(fileS3Path, {
        'Content-Length': stat.size
      , 'Content-Type': 'text/plain' //TODO
    });

    fs.createReadStream(file).pipe(req);

    req.on('response', handlePipeResponse);
  });
}


function handlePipeResponse(response) {
  if (response && response.statusCode === 200){
    process.emit('cloud:uploaded');
    console.log('finished uploading file');
  }else{
    process.emit('cloud:upload-error');
  }
};


exports.listener = newFile;