const express = require('express')
const router = express.Router

router.get("/business/jobDetails", (req, res) => {
    const job = {
        "jobID": "NaN",
        "applicantCount": 8,
        "description": "Product",
        "status": "Open",
        "jobTitle": "Investor Response Manager",
        "applicants": [
            {
                "id": "1",
                "firstname": "Ricardo",
                "lastname": "Bogisich",
                "education": "New York University",
                "gradYear": "2022",
                "edDescription": "CS major",
                "work": [
                    {
                        "id": "1",
                        "company": "Kiehn - Effertz",
                        "role": "Senior Integration Representative",
                        "description": "Did stuff Global",
                        "year": "2019"
                    },
                    {
                        "company": "Yahoo!",
                        "year": "2016",
                        "role": "CEO",
                        "description": "met with shareholders to discuss company goals"
                    }
                ],
                "projects": [
                    {
                        "id": "1",
                        "title": "bandwidth",
                        "description": "Corporate",
                        "year": "2020"
                    }
                ],
                "responses": [
                    {
                        "commonQ": [
                            {
                                "question": "Email",
                                "answer": "apple@oranges.com"
                            },
                            {
                                "question": "Veteran",
                                "answer": "No"
                            }
                        ],
                        "extraQ": [
                            {
                                "question": "Which bear is best?",
                                "answer": "black bear"
                            },
                            {
                                "question": "Why are you interested in working with us?",
                                "answer": "banana"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "2",
                "firstname": "Alva",
                "lastname": "Prosacco",
                "education": "Hartmann - Hodkiewicz",
                "work": [
                    {
                        "company": "Google",
                        "year": "2013"
                    }
                ],
                "projects": [],
                "responses": []
            },
            {
                "id": "3",
                "firstname": "Fritz",
                "lastname": "Lakin",
                "education": "Weimann - Harber",
                "work": [
                    {
                        "company": "Yahoo!",
                        "year": "2019"
                    }
                ],
                "projects": [],
                "responses": []
            }
        ]
    }
    res.json(job)
})

module.exports = router