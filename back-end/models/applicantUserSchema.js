const mongoose = require("mongoose")

let applicantUser = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  email: String,
  details: []
})

module.exports = mongoose.model("applicantUser", applicantUser)