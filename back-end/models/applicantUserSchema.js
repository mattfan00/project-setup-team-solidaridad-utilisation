const mongoose = require("mongoose")

let applicantUser = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  email: String,
  password: String,
  details: {}
})

// removes the password field whenever sending back an applicant user object
applicantUser.set('toJSON', {
  transform: function(doc, ret, opt) {
      delete ret['password']
      return ret
  }
})

module.exports = mongoose.model("applicantUser", applicantUser)