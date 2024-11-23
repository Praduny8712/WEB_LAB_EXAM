var mongoose = require("mongoose");

function connectdb() {
  var connection = mongoose.connect("mongodb://127.0.0.1:27017/Showroom");
  return connection;
}
module.exports = connectdb;
