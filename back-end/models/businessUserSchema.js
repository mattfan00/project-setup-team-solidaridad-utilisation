const mongoose = require("mongoose")

let businessUser = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  company: String
})

// removes the password field whenever sending back an business user object
businessUser.set('toJSON', {
  transform: function(doc, ret, opt) {
      delete ret['password']
      return ret
  }
})

module.exports = mongoose.model("businessUser", businessUser)