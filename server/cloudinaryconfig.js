const cloudinary = require('cloudinary').v2;


cloudinary.config({
  cloud_name: 'amyracloudinary',
  api_key: '871996328575732',
  api_secret: '_cxUiZkjPKM1FElgCL5nFieL_W4'
});

module.exports = cloudinary;