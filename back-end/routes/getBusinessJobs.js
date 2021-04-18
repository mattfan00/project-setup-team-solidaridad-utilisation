const express = require("express");
const router = express.Router();

const AllJobs = require("../models/jobDetails");

// Gets the array of jobs that the business has
router.get("/business/alljobs", async (req, res) => {
  // Hard-coded as Amazon for now
  const alljobs = await AllJobs.find({company: "amazon"});

  res.json(alljobs);
});

router.post("/business/alljobs", (req, res) => {
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

router.post("/business/newjob", (req, res)=> {
  console.log(req.body.newJob);

  req.body.newJob.status = "Open"
  req.body.newJob.applicantCount = 0

  alljobs.push(req.body.newJob);
  res.json(req.body.newJob);
})

module.exports = router;