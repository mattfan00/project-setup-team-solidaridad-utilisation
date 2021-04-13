const mongoose = require("mongoose")

let ApplicantSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    details: [],
    work: [],
    projects: [],
    extraQuestions: [],
})

module.exports = mongoose.model("Applicant", ApplicantSchema)