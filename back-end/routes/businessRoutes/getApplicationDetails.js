const express = require("express")
const router = express.Router()

const Application = require("../../models/applicant.js")
const Jobs = require("../../models/jobDetails")

// Get the applicant that is relevant to this application
router.get("/business/application/details", (req, res) => {
    const applicant = {
        firstname: "Ricardo",
        lastname: "Bogisich",
        education: "New York University",
        gradYear: 2022,
        edDescription: "CS major",
        work: [
          {
            id: "1",
            company: "Kiehn - Effertz",
            role: "Senior Integration Representative",
            description: "Did stuff Global",
            year: 2019
          },
          {
            company: "Yahoo!",
            year: 2016,
            role: "CEO",
            description: "met with shareholders to discuss company goals"
          }
        ],
        projects: [
          {
            id: "1",
            title: "bandwidth",
            description: "Corporate",
            year: "2020"
          }
        ],
        responses: [
          {
            commonQ: [
              {
                question: "Email",
                answer: "apple@oranges.com"
              },
              {
                question: "Veteran",
                answer: "No"
              }
            ],
            extraQ: [
              {
                question: "Which bear is best?",
                answer: "black bear"
              },
              {
                question: "Why are you interested in working with us?",
                answer: "banana"
              }
            ]
          }
        ]
    }
    res.json(applicant)
})




router.post("/job/:jobID/application/new", async (req, res) => {
  const newApplication = await Application.create(req.body)

  const foundJob = await Jobs.findOne({"_id": "6075040d87a07ed72daf186f"})

  foundJob.applicants.push(newApplication.id)
  await foundJob.save()

  res.json(newApplication)
})

/**
 *  Finds appropriate application by finding the job first, and then application
 */
router.get("/job/:jobID/application/:applicationID", async(req, res) => {
  const foundJob = await Jobs.findOne({"_id": req.params.jobID})
  const foundApplication = await foundJob.findOne({"_id": req.params.applicationID})
  res.json(foundApplication)
})
router.put("/job/:jobID/application/:applicationID", async(req, res) => {
  const foundJob = await Jobs.findOne({"_id": req.params.jobID})
  await foundJob.findOneAndUpdate(
    {"_id": req.params.applicationID},
    {returnOriginal: false}
  )

  res.json("Successfully updated")
})
router.delete("/job/:jobID/applcation/:applicationID", async(req, res) => {
  const foundJob = await Jobs.findOne({"_id": req.params.jobID})
  foundJob.findByIdAndDelete(
    {"_id": req.params.applicationID}
  )

  res.json("Successfully deleted")
})
//end business application CRUD

module.exports = router