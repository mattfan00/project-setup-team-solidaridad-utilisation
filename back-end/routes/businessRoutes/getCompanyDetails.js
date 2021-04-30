const express = require("express")
const router = express.Router()

const Business = require("../../models/business")

router.get("/company/:name", async (req, res) => {
    const foundBusiness = await Business.findOne({ name: req.params.name })

    res.json(foundBusiness)
});

module.exports = router