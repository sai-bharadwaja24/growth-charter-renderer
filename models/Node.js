const mongoose = require("mongoose");

const NodeSchema = new mongoose.Schema({
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account"
  },

  nodeId: String,
  name: String,

  value: Number,

  companion: {
    type: Object,
    default: {}
  },

  verbatim: {
    quote: String,
    interpretation: String
  },

  scoredAt: Date,
  scoredBy: String
});

module.exports = mongoose.model("Node", NodeSchema);