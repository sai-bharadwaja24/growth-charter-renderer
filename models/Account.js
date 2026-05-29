const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema(
{
  companyName: String,
  businessDescription: String
},
{
  timestamps: true
}
);

module.exports = mongoose.model("Account", AccountSchema);