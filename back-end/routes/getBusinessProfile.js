const express = require("express");
const router = express.Router();

// Gets the array of jobs that the business has
router.get("/business/profile", (req, res) => {
  // hardcoded for now
  const profile = [
    {
      "description": "AWS provides cloud web service", 
      "introduction": "cloud industry",
      "logo": "user.logo",
    }
  ]
  
  res.json(profile);
});

module.exports = router;