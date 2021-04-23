const mongoose = require("mongoose")

const BusinessSchema = new mongoose.Schema({
  name: String,
  description: String, 
  introduction: String
})

module.exports = mongoose.model("BusinessProfile", BusinessSchema)