const express = require("express")
const router = express.Router()

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

module.exports = router