const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SearchSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  term: {
    type: String,
    required: true
  }
});

module.exports = Search = mongoose.model("Search", SearchSchema);
