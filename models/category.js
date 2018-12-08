const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  urls: [
    {
      type: Schema.Types.ObjectId
    }
  ]
});

module.exports = Category = mongoose.model("Category", CategorySchema);
