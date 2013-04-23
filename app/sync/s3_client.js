knox = require('knox');

exports.s3 = client = knox.createClient({
  key: config.awsConfig.accessKeyId,
  secret: config.awsConfig.secretAccessKey,
  bucket: config.bucket
});