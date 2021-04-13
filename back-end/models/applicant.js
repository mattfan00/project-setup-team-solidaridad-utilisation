const mongoose = require("mongoose")

let ApplicantSchema = new mongoose.Schema({
  name: String,
  age: Number,
  education: String,
})

module.exports = mongoose.model("Applicant", ApplicantSchema)