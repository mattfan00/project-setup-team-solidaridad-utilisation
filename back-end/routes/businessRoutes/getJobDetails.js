const express = require('express')
const router = express.Router()

const AllJobs = require("../../models/jobDetails");

router.get("/business/jobDetails/:id", async (req, res) => {
    const foundJob = await AllJobs.findOne({"_id": req.params.id})

    res.json(foundJob)
})


module.exports = router