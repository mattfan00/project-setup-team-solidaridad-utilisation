const mongoose = require("mongoose")

const BusinessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  description: String, 
  introduction: String
})

module.exports = mongoose.model("BusinessProfile", BusinessSchema)