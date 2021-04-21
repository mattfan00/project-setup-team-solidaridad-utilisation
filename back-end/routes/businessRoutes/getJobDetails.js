const express = require('express')
const router = express.Router()

const AllJobs = require("../../models/jobDetails");

router.get("/business/jobDetails/", async (req, res) => {
    const foundJob = await AllJobs.findOne({"_id": "6075035287a07ed72daf186e"})

    res.json(foundJob)
})

router.get("/business/jobDetails/:id", async (req, res) => {
    const foundJob = await AllJobs.findOne({"_id": req.params.id})

    res.json(foundJob)
})


module.exports = router