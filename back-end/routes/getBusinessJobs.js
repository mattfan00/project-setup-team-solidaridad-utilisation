const express = require("express");
const router = express.Router();

// hardcoded for now
let alljobs = [
  {
    "jobID": 0,
    "jobTitle": "Sales Manager", 
    "status": "Open",
    "applicantCount": 3,
    "description": "Lead",
    "applicants": [{"id":"1","firstname":"Ricardo","lastname":"Bogisich","education":"New York University","gradYear":"2022","edDescription":"CS major","work":[{"id":"1","company":"Kiehn - Effertz","role":"Senior Integration Representative","description":"Did stuff Global","year":"2019"},{"company":"Yahoo!","year":"2016","role":"CEO","description":"met with shareholders to discuss company goals"}],"projects":[{"id":"1","title":"bandwidth","description":"Corporate","year":"2020"}],"responses":[{"commonQ":[{"question":"Email","answer":"apple@oranges.com"},{"question":"Veteran","answer":"No"}],"extraQ":[{"question":"Which bear is best?","answer":"black bear"},{"question":"Why are you interested in working with us?","answer":"banana"}]}]},{"id":"2","firstname":"Alva","lastname":"Prosacco","education":"Hartmann - Hodkiewicz","work":[{"company":"Google","year":"2013"}],"projects":[],"responses":[]},{"id":"3","firstname":"Fritz","lastname":"Lakin","education":"Weimann - Harber","work":[{"company":"Yahoo!","year":"2019"}],"projects":[],"responses":[]}]
  },
  {
    "jobID": 1,
    "jobTitle": "Software Engineer", 
    "status": "Closed",
    "applicantCount": 0,
    "description": "Chief"
  }
]

// Gets the array of jobs that the business has
router.get("/business/alljobs", (req, res) => {
  res.json(alljobs);
});

router.post("/business/alljobs", (req, res) => {
  console.log(req.body);
  if (req.body.changeStatus === "Open") {
      alljobs[req.body.targetID].status = "Open";
  }
  else if (req.body.changeStatus === "Closed") {
      alljobs[req.body.targetID].status = "Closed";
  }
  else if (req.body.changeStatus === "Archived") {
      alljobs[req.body.targetID].status = "Archived";
  }
  console.log(alljobs)
  res.json(alljobs)
})

module.exports = router;