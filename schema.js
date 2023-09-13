const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogDB = new Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model("Blog", blogDB);
