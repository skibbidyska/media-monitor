const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  client: {
    type: String,
    required: true
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category"
    }
  ]
});

module.exports = Client = mongoose.model("Client", ClientSchema);
