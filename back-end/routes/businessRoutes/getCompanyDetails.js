const express = require("express")
const router = express.Router()

router.get("/company/:name", (req, res) => {
    const companies = {
        companyName: "Amazon",
        companyLogo: "/images/companyLogo.jpg",
        education: "New York University",
        gradYear: "2022",
        edDescription: "CS major",
    }

})
