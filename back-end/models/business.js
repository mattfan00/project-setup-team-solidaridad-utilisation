const mongoose = require("mongoose")

const BusinessSchema = new mongoose.Schema({
  name: String,
  description: String, 
  industry: String,
  logo: String,
})

module.exports = mongoose.model("BusinessProfile", BusinessSchema)