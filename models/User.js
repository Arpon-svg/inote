const mongoose = require("mongoose");
const userScema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  Time: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("user", userScema);