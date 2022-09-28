const mongoose = require('mongoose');

const imageSchema = new Schema({
  imageID: {type: Number , required : true},
  name: {type: String , required : true},
  url: {type: String , required : true},
  size: {type: String , required : true},
});

module.exports = mongoose.model('Image', imageSchema);

