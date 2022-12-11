const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  imageID: {type: String , required : true},
  imageString: {type: String , required : true},
});

module.exports = mongoose.model('Image', imageSchema);

