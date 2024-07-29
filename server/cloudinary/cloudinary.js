const cloudinary = require("cloudinary").v2

cloudinary.config({ 
    cloud_name: 'dryoeakcf', 
    api_key: '494742126286145', 
    api_secret: 'GYVIU2Own6a6Q_F_bWvPs7aP3xw' // Click 'View Credentials' below to copy your API secret
});

module.exports = cloudinary