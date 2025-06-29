//updated here
const mongoose = require('mongoose')
const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

const Model = mongoose.model("data",schema)
module.exports = Model;