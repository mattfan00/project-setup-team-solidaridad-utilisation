const express = require("express");
const router = express.Router();
const businessAuth = require("../middleware/businessAuth")

const AllJobs = require("../models/jobDetails");

// Gets the array of jobs that the business has
router.get("/business/alljobs", businessAuth, async (req, res) => {
  // Hard-coded as Amazon for now
  const alljobs = await AllJobs.find({company: req.businessUser.company});

  res.json(alljobs);
});

router.post("/business/alljobs", businessAuth, (req, res) => {
  if (req.body.changeStatus === "Open") {
      alljobs[req.body.targetID].status = "Open";
  }
  else if (req.body.changeStatus === "Closed") {
      alljobs[req.body.targetID].status = "Closed";
  }
  else if (req.body.changeStatus === "Archived") {
      alljobs[req.body.targetID].status = "Archived";
  }
  // console.log(alljobs)
  res.json(alljobs)
})

// *** jobDetails - CRUD Operations ***
const Job = require("../models/jobDetails")
// jobDetails: Create
router.post("/jobs/new", businessAuth, async (req, res) => {
  const newJob = await Job.create({
    ...req.body,
    company: req.businessUser.company,
    status: "open"
  })

  res.json(newJob)
})
// jobDetails: Read
router.get("/jobs/:id", async (req, res) => {
  const foundJob = await Job.findOne({"_id": req.params.id}).populate("applicants")

  res.json(foundJob)
})
// jobDetails: Update (the status of the job)
router.put("/jobs/:id", businessAuth, async (req, res) => {
  console.log(req.body.changeStatus)
  console.log(req.params.id)

  await Job.findOneAndUpdate(
    {"_id": req.params.id},
    {status: req.body.changeStatus},
    {returnOriginal: false}
  )

  res.json("Successfully updated the job.")
})
// jobDetails: Delete
router.delete("/jobs/:id", businessAuth, (req, res) => {
  Job.findByIdAndDelete(
    {"_id": req.params.id}
  )

  res.json("Successfully deleted")
})

// router.post("/business/newjob", async (req, res)=> {
//   console.log(req.body)
//   const createdJob = await AllJobs.create(req.body)

//   res.json(createdJob)
//   // // hard-coded as Amazon for now


//   // const alljobs = await AllJobs.find({company:'amazon'});

//   // req.body.newJob.status = "Open"
//   // req.body.newJob.applicantCount = 0

//   // alljobs.push(req.body.newJob);
//   // res.json(req.body.newJob);
// })

module.exports = router;