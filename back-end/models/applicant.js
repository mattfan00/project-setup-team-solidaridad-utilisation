const mongoose = require("mongoose")

let ApplicantSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    details: [],
    education: [],
    workExperience: [],
    projects: [],
    extraQuestions: [],
})

module.exports = mongoose.model("Applicant", ApplicantSchema)