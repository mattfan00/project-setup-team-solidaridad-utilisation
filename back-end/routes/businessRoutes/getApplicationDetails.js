const express = require("express")
const router = express.Router()
const applicantAuth = require("../../middleware/applicantAuth")

const Application = require("../../models/applicant.js")
const Jobs = require("../../models/jobDetails")
const ApplicantUser = require("../../models/applicantUserSchema")

router.post("/job/:jobID/application/new", applicantAuth, async (req, res) => {
  const newApplication = await Application.create(req.body)

  const foundJob = await Jobs.findOne({"_id": req.params.jobID})

  foundJob.applicants.push(newApplication.id)
  await foundJob.save()

  // update the users information if they are logged in
  if (req.applicantUser) {
    const { firstName, lastName, details, workExperience, education} = req.body
    await ApplicantUser.findByIdAndUpdate(req.applicantUser.id, {
      details: {
        name: {
          firstName,
          lastName
        },
        ...details,
        workExperience,
        education
      }
    })
  }

  res.json(newApplication)
})

/**
 *  Finds appropriate application by finding the job first, and then application
 */
router.get("/application/:applicationID", async(req, res) => {
  const foundApplication = await Application.findOne({"_id": req.params.applicationID})
  res.json(foundApplication)
})
router.put("/application/:applicationID", async(req, res) => {
  const foundJob = await Jobs.findOne({"_id": req.params.applicationID})
  await foundJob.findOneAndUpdate(
    {"_id": req.params.applicationID},
    {returnOriginal: false}
  )

  res.json("Successfully updated")
})
router.delete("/application/:applicationID", async(req, res) => {
  const foundJob = await Jobs.findOne({"_id": req.params.applicationID})
  foundJob.findByIdAndDelete(
    {"_id": req.params.applicationID}
  )

  res.json("Successfully deleted")
})
//end business application CRUD

module.exports = router