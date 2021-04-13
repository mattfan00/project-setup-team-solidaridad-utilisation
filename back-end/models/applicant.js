const mongoose = require("mongoose")

let ApplicantSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    age: Number,
    education: String,
    gradYear: Number,
    edDescription: String,
    address: [],
    work: [],
    projects: [],
})

module.exports = mongoose.model("Applicant", ApplicantSchema)