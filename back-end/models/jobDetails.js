const mongoose = require('mongoose')

let JobSchema = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Business"
    },
    jobTitle: String,
    status: String,
    applicantCount: Number,
    fields: [String],
    description: String,
    location: String,
    skills: String,
    extraQuestions: [],
    applicants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Applicant"
        }
    ]
})

module.exports = mongoose.model('Job', JobSchema)