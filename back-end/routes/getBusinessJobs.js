const express = require("express");
const router = express.Router();

// hardcoded for now
let alljobs = [
  {
    "jobID": 0,
    "jobTitle": "Sales Manager", 
    "jobStatus": "Open",
    "applicantCount": 3,
    "fields": [
      "resume",
      "name",
      "email",
      "address",
      "workExperience"
    ],
    "description": "Lead",
    "location": "New York, New York",
    "skills": "Microsoft Word, Microsoft Excel, public speaking, management",
    "extraQuestions": [
      {
        "id": "6050cf3b2b1075721d44f214",
        "label": "Why do you want to join?",
        "required": true,
        "type": "multiline"
      },
      {
        "id": "6050d3ad8b47286b9091e134",
        "label": "What can you bring to the job?",
        "required": true,
        "type": "date"
      }
    ],
    "applicants": [{"id":"1","firstname":"Ricardo","lastname":"Bogisich","education":"New York University","gradYear":"2022","edDescription":"CS major","work":[{"id":"1","company":"Kiehn - Effertz","role":"Senior Integration Representative","description":"Did stuff Global","year":"2019"},{"company":"Yahoo!","year":"2016","role":"CEO","description":"met with shareholders to discuss company goals"}],"projects":[{"id":"1","title":"bandwidth","description":"Corporate","year":"2020"}],"responses":[{"commonQ":[{"question":"Email","answer":"apple@oranges.com"},{"question":"Veteran","answer":"No"}],"extraQ":[{"question":"Which bear is best?","answer":"black bear"},{"question":"Why are you interested in working with us?","answer":"banana"}]}]},{"id":"2","firstname":"Alva","lastname":"Prosacco","education":"Hartmann - Hodkiewicz","work":[{"company":"Google","year":"2013"}],"projects":[],"responses":[]},{"id":"3","firstname":"Fritz","lastname":"Lakin","education":"Weimann - Harber","work":[{"company":"Yahoo!","year":"2019"}],"projects":[],"responses":[]}]
  },
  {
    "jobID": 1,
    "jobTitle": "Software Engineer", 
    "status": "Closed",
    "applicantCount": 0,
    "fields": [
      "resume",
      "name",
      "email",
      "address",
      "workExperience"
    ],
    "description": "You will be a crucial member of the core team, from building back-end infrastructure to user-facing applications — and everything in between. You will build features across the platform from user-facing web applications, workflow systems, data modeling engines, and integrations with disparate third party systems. You will help establish technical strategy and direction and will also support growing and developing a world-class engineering team. There are so many important problems to solve that directly impact the lives of the 10,000 Americans entering retirement every day. \n\n We're looking for a software engineer intern to support our core team. As an early team member, you will have broad impact over the technology, the product, and our company's culture.",
    "location": "New York, New York",
    "skills": "Microsoft Word, Microsoft Excel, public speaking, management",
    "extraQuestions": [
      {
        "id": "6050cf3b2b1075721d44f214",
        "label": "Why do you want to join?",
        "required": true,
        "type": "yesNo"
      },
      {
        "id": "6050d3ad8b47286b9091e134",
        "label": "What can you bring to the job?",
        "required": true,
        "type": "singleLine"
      }
    ]
  }
]

// Gets the array of jobs that the business has
router.get("/business/alljobs", (req, res) => {
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

  alljobs.push(req.body.newJob);
  res.json(req.body.newJob);
})

module.exports = router;