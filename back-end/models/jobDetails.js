require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

mongoose.connect(process.env.jobsUrl, { useNewUrlParser: true})

const jobsRouter = require('../routes/getBusinessJobs')
app.use('/business/alljobs')

app.listen(4000, () => console.log('Server Started'))

let allJobs = new mongoose.Schema({
    jobTitle: String, 
    jobStatus: String,
    applicantCount: Number,
    fields: {
        resume: String,
        name: String,
        email: String, 
        address: String,
        workExperience: String, //is this suppose to be a string?
    },
    description: String, 
    location: String,
    skills: {

    },
    extraQuestions: {
        label: String,
        required: true,
        type: String, 
    }, 
    applicants: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "applicant"
    }
})

module.exports = mongoose.model('Job', allJobs)