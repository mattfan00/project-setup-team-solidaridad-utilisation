const express = require("express");
const router = express.Router();

// Gets the array of jobs that the business has
router.get("/business/alljobs", (req, res) => {
  // hardcoded for now
  const alljobs = [
    {
      "job-title": "Sales Manager", 
      "status": "open",
      "num-applicants": 55
    },
    {
      "job-title": "Software Engineer", 
      "status": "closed",
      "num-applicants": 20
    }
  ]
  
  res.json(user);
});

module.exports = router;