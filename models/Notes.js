const mongoose = require("mongoose");
const notesScema = new Schema({
  title: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
  },
  Time: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("user", notesScema);
