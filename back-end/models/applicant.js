const mongoose = require("mongoose")

let ApplicantSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    details: Object,
    education: [],
    workExperience: [],
    projects: [],
    extraQuestions: [],
})

module.exports = mongoose.model("Applicant", ApplicantSchema)